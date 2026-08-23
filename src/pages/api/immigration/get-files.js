import { getSupabaseAdmin } from "@utils/supabaseAdmin";
import { requireAdminUser } from "@utils/supabaseServerAuth";

export default async function handler(req, res) {
  if (!(await requireAdminUser(req, res))) return;

  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase.from("files").select("*");

    if (error) throw error;

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
