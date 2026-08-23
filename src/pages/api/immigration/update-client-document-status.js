import { getSupabaseAdmin } from "@utils/supabaseAdmin";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const supabase = getSupabaseAdmin();
    const { id, is_client_completed } = req.body || {};

    const { data, error } = await supabase
      .from("documents")
      .update({ is_client_completed })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
