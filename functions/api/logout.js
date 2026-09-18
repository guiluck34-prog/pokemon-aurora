export async function onRequestGet(context) {
  const cookie = context.request.headers.get("Cookie") || "";

  const match = cookie.match(/aurora_session=([^;]+)/);
  const sessionId = match?.[1];

  if (sessionId && context.env.DB) {
    await context.env.DB
      .prepare("DELETE FROM sessions WHERE id = ?")
      .bind(sessionId)
      .run();
  }

  return new Response(JSON.stringify({
    success: true
  }), {
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": "aurora_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
    }
  });
}
