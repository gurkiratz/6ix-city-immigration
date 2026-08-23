// Server-side (Node.js API route) Supabase Auth check for the admin tool.
// This is the REAL, cryptographically-verified auth boundary — unlike
// middleware.js's cheap cookie-presence check, this actually calls Supabase
// to validate the session.
import { createServerClient, parseCookieHeader, serializeCookieHeader } from "@supabase/ssr";

function createSupabaseServerClient(req, res) {
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
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
export async function requireAdminUser(req, res) {
  const user = await getAuthenticatedUser(req, res);
  if (!user) {
    res.status(401).json({ error: "Authentication required." });
    return null;
  }
  return user;
}
