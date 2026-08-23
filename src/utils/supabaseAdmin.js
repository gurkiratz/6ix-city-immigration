// Server-only Supabase client for the immigration accelerator.
// Uses the service-role key, so this must NEVER be imported from
// client-side code (components) — only from pages/api/* routes.
import { createClient } from "@supabase/supabase-js";

let cachedClient = null;

export function getSupabaseAdmin() {
  if (cachedClient) return cachedClient;

  // Same project URL as the public client (src/utils/supabaseClient.js) —
  // the URL isn't secret, only IMM_SECRET (the service-role key) is.
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.IMM_SECRET;

  if (!url || !key) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL / IMM_SECRET environment variables for the immigration accelerator."
    );
  }

  cachedClient = createClient(url, key);
  return cachedClient;
}
