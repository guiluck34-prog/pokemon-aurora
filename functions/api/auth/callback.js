export async function onRequestGet(context) {
  const url = new URL(context.request.url);

  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  if (!code || !state) {
    return new Response("Código ou state em falta.", { status: 400 });
  }

  const cookies = context.request.headers.get("Cookie") || "";
  const match = cookies.match(/aurora_oauth=([^;]+)/);

  if (!match) {
    return new Response("Sessão OAuth não encontrada.", { status: 400 });
  }

  let oauthData;

  try {
    oauthData = JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return new Response("Cookie OAuth inválido.", { status: 400 });
  }

  if (oauthData.state !== state) {
    return new Response("State inválido.", { status: 400 });
  }

  const tokenResponse = await fetch(
    "https://apis.roblox.com/oauth/v1/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
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

  if (!tokenResponse.ok) {
    return new Response("Falha ao obter token do Roblox.", {
      status: 400
    });
  }

  const tokens = await tokenResponse.json();

  const userResponse = await fetch(
    "https://apis.roblox.com/oauth/v1/userinfo",
    {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`
      }
    }
  );

  if (!userResponse.ok) {
    return new Response("Falha ao obter dados do Roblox.", {
      status: 400
    });
  }

  const user = await userResponse.json();

  const now = new Date().toISOString();

  await context.env.DB
    .prepare(`
      INSERT INTO users (
        roblox_id,
        username,
        display_name,
        avatar_url,
        updated_at
      )
      VALUES (?, ?, ?, ?, ?)
      ON CONFLICT(roblox_id)
      DO UPDATE SET
        username = excluded.username,
        display_name = excluded.display_name,
        avatar_url = excluded.avatar_url,
        updated_at = excluded.updated_at
    `)
    .bind(
      user.sub,
      user.preferred_username || user.name || "Roblox",
      user.name || user.preferred_username || "Roblox",
      user.picture || "",
      now
    )
    .run();

  const dbUser = await context.env.DB
    .prepare("SELECT id FROM users WHERE roblox_id = ?")
    .bind(user.sub)
    .first();

  const sessionId = crypto.randomUUID();
  const expiresAt = Date.now() + 1000 * 60 * 60 * 24 * 7;

  await context.env.DB
    .prepare(`
      INSERT INTO sessions (id, user_id, expires_at)
      VALUES (?, ?, ?)
    `)
    .bind(sessionId, dbUser.id, expiresAt)
    .run();

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/",
      "Set-Cookie": [
        `aurora_session=${sessionId}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=604800`,
        `aurora_oauth=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`
      ].join(", ")
    }
  });
    }
