// Server-side (Node.js API route) Supabase Auth check for the admin tool.
// This is the REAL, cryptographically-verified auth boundary — unlike
// middleware.js's cheap cookie-presence check, this actually calls Supabase
// to validate the session.
import { createServerClient, parseCookieHeader, serializeCookieHeader } from "@supabase/ssr";
import ws from "ws";

function createSupabaseServerClient(req, res) {
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    // supabase-js always constructs a Realtime client, which otherwise
    // throws at construction time on Vercel's Node.js serverless runtime
    // (no global WebSocket there below Node 22). We only use this client
    // for supabase.auth.getUser() — never Realtime — so the `ws` polyfill
    // just needs to exist to satisfy that constructor; it's never connected.
    realtime: { transport: ws },
    cookies: {
      getAll() {
        return parseCookieHeader(req.headers.cookie ?? "");
      },
      setAll(cookiesToSet) {
        const existing = res.getHeader("Set-Cookie");
        const existingCookies = existing ? (Array.isArray(existing) ? existing : [existing]) : [];
        const newCookies = cookiesToSet.map(({ name, value, options }) =>
          serializeCookieHeader(name, value, options)
        );
        res.setHeader("Set-Cookie", [...existingCookies, ...newCookies]);
      },
    },
  });
}

// Returns the signed-in user, or null. Also writes back the response header
// needed if Supabase refreshed the session's tokens during this request.
export async function getAuthenticatedUser(req, res) {
  const supabase = createSupabaseServerClient(req, res);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

// Call at the top of any admin API route. Sends a 401 and returns false if
// there's no valid signed-in user; the route should then `return` immediately.
//
// Wrapped in try/catch so a broken auth check (e.g. missing
// NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY env vars, or a
// Supabase outage) surfaces as a normal 500 JSON response instead of an
// uncaught exception — an uncaught throw here happens before any route's own
// try/catch runs, which crashes the whole serverless function
// (FUNCTION_INVOCATION_FAILED) instead of returning a diagnosable error.
export async function requireAdminUser(req, res) {
  let user;
  try {
    user = await getAuthenticatedUser(req, res);
  } catch (error) {
    res.status(500).json({ error: `Authentication check failed: ${error.message}` });
    return null;
  }

  if (!user) {
    res.status(401).json({ error: "Authentication required." });
    return null;
  }
  return user;
}
