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
    const { file_id, label, category } = req.body || {};

    const { data, error } = await supabase
      .from("documents")
      .insert([
        {
          file_id,
          label,
          category: category || "custom",
          is_completed: false,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
