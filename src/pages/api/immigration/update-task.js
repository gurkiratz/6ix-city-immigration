import { getSupabaseAdmin } from "@utils/supabaseAdmin";
import { requireAdminUser } from "@utils/supabaseServerAuth";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  if (!(await requireAdminUser(req, res))) return;

  try {
    const supabase = getSupabaseAdmin();
    const { id, is_completed } = req.body || {};

    const { data, error } = await supabase
      .from("tasks")
      .update({ is_completed })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
