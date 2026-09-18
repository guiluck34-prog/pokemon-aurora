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
          client_secret:
            context.env.ROBLOX_CLIENT_SECRET,
          redirect_uri:
            context.env.ROBLOX_REDIRECT_URI,
          code_verifier:
            oauthData.code_verifier
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

    const userResponse = await
