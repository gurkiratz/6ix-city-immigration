import { getSupabaseAdmin } from "@utils/supabaseAdmin";

// Public endpoint: reachable via the share-token link sent to clients.
// Do NOT add admin auth gating here (see middleware.js matcher).
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const supabase = getSupabaseAdmin();
    const { token, sections } = req.body || {};
    if (!token) throw new Error("Missing token");

    const { error } = await supabase
      .from("client_forms")
      .update({ sections, last_updated: new Date().toISOString() })
      .eq("share_token", token)
      .select("share_token")
      .single();

    if (error) throw error;

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
