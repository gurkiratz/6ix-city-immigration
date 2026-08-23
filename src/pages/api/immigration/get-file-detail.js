import { getSupabaseAdmin } from "@utils/supabaseAdmin";
import { requireAdminUser } from "@utils/supabaseServerAuth";

export default async function handler(req, res) {
  if (!(await requireAdminUser(req, res))) return;

  const fileId = req.query.id;

  try {
    const supabase = getSupabaseAdmin();
    const [fileRes, tasksRes, docsRes, formRes] = await Promise.all([
      supabase.from("files").select("*").eq("id", fileId).single(),
      supabase.from("tasks").select("*").eq("file_id", fileId),
      supabase
        .from("documents")
        .select("*")
        .eq("file_id", fileId)
        .eq("is_deleted", false)
        .order("category", { ascending: false }),
      supabase.from("client_forms").select("*").eq("file_id", fileId).single(),
    ]);

    return res.status(200).json({
      file: fileRes.data,
      tasks: tasksRes.data,
      documents: docsRes.data,
      clientForm: formRes.data,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
