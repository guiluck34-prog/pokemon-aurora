export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);

    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const error = url.searchParams.get("error");

    if (error) {
      return new Response(
        `Roblox OAuth recusado ou falhou: ${error}`,
        { status: 400 }
      );
    }

    if (!code || !state) {
      return new Response(
        "Código ou state em falta.",
        { status: 400 }
      );
    }

    const cookieHeader =
      context.request.headers.get("Cookie") || "";

    const cookieMatch =
      cookieHeader.match(/aurora_oauth=([^;]+)/);

    if (!cookieMatch) {
      return new Response(
        "Cookie OAuth não encontrado. Inicia o login novamente.",
        { status: 400 }
      );
    }

    let oauthData;

    try {
      oauthData = JSON.parse(
        decodeURIComponent(cookieMatch[1])
      );
    } catch {
      return new Response(
        "Cookie OAuth inválido.",
        { status: 400 }
      );
    }

    if (!oauthData.state || oauthData.state !== state) {
      return new Response(
        "State inválido. Inicia o login novamente.",
        { status: 400 }
      );
    }

    if (!oauthData.code_verifier) {
      return new Response(
        "Code verifier em falta.",
        { status: 400 }
      );
    }

    const tokenResponse = await fetch(
      "https://apis.roblox.com/oauth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          client_id: context.env.ROBLOX_CLIENT_ID,
          client_secret: context.env.ROBLOX_CLIENT_SECRET,
          redirect_uri: context.env.ROBLOX_REDIRECT_URI,
          code_verifier: oauthData.code_verifier
        })
      }
    );

    const tokenText = await tokenResponse.text();

    if (!tokenResponse.ok) {
      return new Response(
        `Roblox token error: ${tokenText}`,
        { status: 400 }
      );
    }

    const tokens = JSON.parse(tokenText);

    if (!tokens.access_token) {
      return new Response(
        "O Roblox não devolveu um access token.",
        { status: 400 }
      );
    }

    const userResponse = await fetch(
      "https://apis.roblox.com/oauth/v1/userinfo",
      {
        headers: {
          Authorization:
            `Bearer ${tokens.access_token}`
        }
      }
    );

    const userText = await userResponse.text();

    if (!userResponse.ok) {
      return new Response(
        `Roblox userinfo error: ${userText}`,
        { status: 400 }
      );
    }

    const user = JSON.parse(userText);

    if (!user.sub) {
      return new Response(
        "O Roblox não devolveu o ID do utilizador.",
        { status: 400 }
      );
    }

    const now = new Date().toISOString();

    await context.env.DB
      .prepare(`
        INSERT INTO users (
          roblox_id,
          username,
          display_name,
          avatar_url,
          created_at,
          updated_at
        )
        VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(roblox_id)
        DO UPDATE SET
          username = excluded.username,
          display_name = excluded.display_name,
          avatar_url = excluded.avatar_url,
          updated_at = excluded.updated_at
      `)
      .bind(
        user.sub,
        user.preferred_username ||
          user.name ||
          "Roblox",
        user.name ||
          user.preferred_username ||
          "Roblox",
        user.picture || "",
        now,
        now
      )
      .run();

    const dbUser = await context.env.DB
      .prepare(
        "SELECT id FROM users WHERE roblox_id = ?"
      )
      .bind(user.sub)
      .first();

    if (!dbUser) {
      return new Response(
        "Utilizador não encontrado na base de dados.",
        { status: 500 }
      );
    }

    const sessionId = crypto.randomUUID();

    const expiresAt =
      Date.now() + 1000 * 60 * 60 * 24 * 7;

    await context.env.DB
      .prepare(`
        INSERT INTO sessions (
          id,
          user_id,
          expires_at
        )
        VALUES (?, ?, ?)
      `)
      .bind(
        sessionId,
        dbUser.id,
        expiresAt
      )
      .run();

    const headers = new Headers();

    headers.set("Location", "/");

    headers.append(
      "Set-Cookie",
      `aurora_session=${sessionId}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=604800`
    );

    headers.append(
      "Set-Cookie",
      "aurora_oauth=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
    );

    return new Response(null, {
      status: 302,
      headers
    });

  } catch (error) {

    return new Response(
      `Erro interno no callback: ${error?.message || error}`,
      { status: 500 }
    );

  }
         }
