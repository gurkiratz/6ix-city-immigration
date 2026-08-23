import { getSupabaseAdmin } from "@utils/supabaseAdmin";
import { BLUEPRINTS, populateSection } from "@utils/immigration/blueprints";
import { requireAdminUser } from "@utils/supabaseServerAuth";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  if (!(await requireAdminUser(req, res))) return;

  try {
    const supabase = getSupabaseAdmin();
    const { name, type } = req.body || {};

    // 1. Create the parent File record
    const { data: fileData, error: fileError } = await supabase
      .from("files")
      .insert([{ name, type, status: "Initiated" }])
      .select()
      .single();

    if (fileError) throw fileError;
    const fileId = fileData.id;

    // 2. Locate the blueprint rules
    const blueprint = BLUEPRINTS[type];
    if (!blueprint) throw new Error(`Blueprint template missing for type: ${type}`);

    const tasksToInsert = blueprint.tasks.map((task) => ({
      file_id: fileId,
      label: task.label,
      description: task.description || "",
      is_completed: false,
    }));

    const docsToInsert = blueprint.documents.map((doc) => ({
      file_id: fileId,
      label: doc.label,
      category: doc.category,
      is_completed: false,
    }));

    const combinedFormSections = [
      ...blueprint.questionnaire.defaultSections.map(populateSection),
      ...blueprint.questionnaire.optionalSections.map(populateSection),
    ];

    const parallelInserts = [];

    if (tasksToInsert.length > 0) {
      parallelInserts.push(supabase.from("tasks").insert(tasksToInsert));
    }
    if (docsToInsert.length > 0) {
      parallelInserts.push(supabase.from("documents").insert(docsToInsert));
    }

    parallelInserts.push(
      supabase.from("client_forms").insert([
        {
          file_id: fileId,
          sections: combinedFormSections,
        },
      ])
    );

    await Promise.all(parallelInserts);

    return res.status(201).json(fileData);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
