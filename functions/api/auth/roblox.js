function base64url(bytes) {
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function onRequestGet(context) {
  const stateBytes = new Uint8Array(32);
  const verifierBytes = new Uint8Array(32);

  crypto.getRandomValues(stateBytes);
  crypto.getRandomValues(verifierBytes);

  const state = base64url(stateBytes);
  const codeVerifier = base64url(verifierBytes);

  const encoder = new TextEncoder();

  const hash = await crypto.subtle.digest(
    "SHA-256",
    encoder.encode(codeVerifier)
  );

  const codeChallenge = base64url(new Uint8Array(hash));

  const params = new URLSearchParams({
    client_id: context.env.ROBLOX_CLIENT_ID,
    redirect_uri: context.env.ROBLOX_REDIRECT_URI,
    response_type: "code",
    scope: "openid profile",
    state,
    code_challenge: codeChallenge,
    code_challenge_method: "S256"
  });

  const oauthData = encodeURIComponent(
    JSON.stringify({
      state,
      code_verifier: codeVerifier
    })
  );

  return new Response(null, {
    status: 302,
    headers: {
      Location: `https://apis.roblox.com/oauth/v1/authorize?${params}`,
      "Set-Cookie": `aurora_oauth=${oauthData}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`
    }
  });
      }
