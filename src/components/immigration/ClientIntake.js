// Ported from ../immigration (immigrationAccelerator/ClientIntake.tsx).
// Public page a client lands on via their share-token link.
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import QuestionnaireRunner from "./QuestionnaireRunner";
import ClientDocumentChecklist from "./ClientDocumentChecklist";

const ClientIntake = () => {
  const router = useRouter();
  const { token } = router.query;
  const [sections, setSections] = useState([]);
  const [initialDocuments, setInitialDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [isQueueActive, setIsQueueActive] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await fetch(`/api/immigration/get-public-form?token=${token}`);
        if (!res.ok) throw new Error("Invalid or expired link.");
        const data = await res.json();
        setSections(data.form);
        setInitialDocuments(data.documents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (token) fetchForm();
  }, [token]);

  const handleSaveAnswer = async (sectionId, fieldId, value) => {
    let updatedSections = [];
    setSections((prev) => {
      updatedSections = prev.map((section) => {
        if (section.id !== sectionId) return section;
        return {
          ...section,
          fields: section.fields.map((field) =>
            field.id === fieldId ? { ...field, answer: value } : field
          ),
        };
      });
      return updatedSections;
    });
    return await saveProgress(undefined, updatedSections);
  };

  const handleInputChange = async (sectionId, fieldId, value) => {
    setSections((prev) =>
      prev.map((section) => {
        if (section.id !== sectionId) return section;
        return {
          ...section,
          fields: section.fields.map((field) =>
            field.id === fieldId ? { ...field, answer: value } : field
          ),
        };
      })
    );
  };

  const saveProgress = async (event, sectionsToSave) => {
    setSaving(true);
    try {
      const payloadSections = sectionsToSave ?? sections;
      await fetch("/api/immigration/update-public-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, sections: payloadSections }),
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (err) {
      alert("Failed to save progress. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="immigration-page">Loading your form...</div>;
  if (error)
    return (
      <div className="immigration-page">
        <h3>Error</h3>
        <p>{error}</p>
      </div>
    );

  return (
    <div className="immigration-page public-intake">
      <div className="intake-header">
        <h2>Client Information Questionnaire</h2>
        <p>Please fill out the sections below. Your data is saved securely.</p>
      </div>

      <div className="client-intake-page">
        {isQueueActive ? (
          <QuestionnaireRunner
            sections={sections}
            onSaveAnswer={handleSaveAnswer}
            onComplete={() => setIsQueueActive(false)}
          />
        ) : (
          ""
        )}

        <div className="intake-form-container">
          {sections
            .filter((s) => s.is_active)
            .map((section) => (
              <div key={section.id} className="intake-section">
                <h3>{section.title}</h3>
                <div className="fields-grid">
                  {section.fields.map((field) => (
                    <div key={field.id} className="form-group">
                      <label>{field.label}</label>

                      {field.type === "text" && (
                        <input
                          type="text"
                          value={field.answer || ""}
                          onChange={(e) => handleInputChange(section.id, field.id, e.target.value)}
                        />
                      )}

                      {field.type === "date" && (
                        <input
                          type="date"
                          value={field.answer || ""}
                          onChange={(e) => handleInputChange(section.id, field.id, e.target.value)}
                        />
                      )}

                      {field.type === "boolean" && (
                        <input
                          type="checkbox"
                          checked={field.answer || false}
                          onChange={(e) => handleInputChange(section.id, field.id, e.target.checked)}
                        />
                      )}

                      {field.type === "select" && (
                        <select
                          value={field.answer || ""}
                          onChange={(e) => handleInputChange(section.id, field.id, e.target.value)}
                        >
                          {field.options?.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      )}
                      {field.type === "email" && (
                        <input
                          type="email"
                          value={field.answer || ""}
                          onChange={(e) => handleInputChange(section.id, field.id, e.target.value)}
                        />
                      )}
                      {field.type === "repeater" && (
                        <div className="repeater-container">
                          {(field.answer || []).map((item, index) => (
                            <div key={index} className="repeater-item">
                              {field.subFields?.map((subField) => (
                                <div key={subField.id} className="form-group">
                                  <label>{subField.label}</label>
                                  {subField.type === "text" && (
                                    <input type="text" value={item[subField.id] || ""} readOnly />
                                  )}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        <ClientDocumentChecklist initialDocs={initialDocuments} />
      </div>

      <div className="intake-footer">
        <button className="btn-primary" onClick={saveProgress} disabled={saving}>
          {saving ? "Saving..." : showSuccess ? "Saved ✓" : "Save Progress"}
        </button>
      </div>
    </div>
  );
};

export default ClientIntake;
