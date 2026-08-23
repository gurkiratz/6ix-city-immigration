// Browser-side Supabase client for the immigration admin login.
// Uses the anon/publishable key (safe to expose) — NOT the service-role key.
// Session is stored in cookies (via @supabase/ssr) so middleware can read it
// on the server for the /admin gate.
import { createBrowserClient } from "@supabase/ssr";

let cachedClient = null;

export function getSupabaseBrowser() {
  if (cachedClient) return cachedClient;

  cachedClient = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  return cachedClient;
}
