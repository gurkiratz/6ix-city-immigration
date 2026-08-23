import { getSupabaseAdmin } from "@utils/supabaseAdmin";

// Public endpoint: reachable via the share-token link sent to clients.
// Do NOT add admin auth gating here (see middleware.js matcher).
export default async function handler(req, res) {
  const token = req.query.token;
  if (!token) return res.status(400).json({ error: "Missing share token" });

  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("client_forms")
      .select("share_token, file_id, sections")
      .eq("share_token", token)
      .single();

    if (error) throw error;

    const { data: docs, error: docError } = await supabase
      .from("documents")
      .select("*")
      .eq("file_id", data.file_id)
      .eq("is_deleted", false)
      .order("category", { ascending: false });

    if (docError) throw docError;

    return res.status(200).json({ form: data.sections, documents: docs });
  } catch (error) {
    return res.status(404).json({ error: "Form not found or invalid link." });
  }
}
