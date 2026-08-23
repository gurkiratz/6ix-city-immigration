// Server-only Supabase client for the immigration accelerator.
// Uses the service-role key, so this must NEVER be imported from
// client-side code (components) — only from pages/api/* routes.
import { createClient } from "@supabase/supabase-js";

let cachedClient = null;

export function getSupabaseAdmin() {
  if (cachedClient) return cachedClient;

  const url = process.env.IMM_URL;
  const key = process.env.IMM_SECRET;

  if (!url || !key) {
    throw new Error(
      "Missing IMM_URL / IMM_SECRET environment variables for the immigration accelerator."
    );
  }

  cachedClient = createClient(url, key);
  return cachedClient;
}
