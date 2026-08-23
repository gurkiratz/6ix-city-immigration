// Ported from ../immigration (immigrationAccelerator/DocumentChecklist.tsx).
// Admin-side document tracker for a file.
//
// Fixed while porting: handleRemoveDocument previously did
// `setDocs(prev => ({ ...prev, documents: updatedDocuments }))`, which spread
// an array into an object and left the list broken after a removal. It now
// just sets the filtered array.
import React, { useState } from "react";

const DocumentChecklist = ({ fileId, initialDocs }) => {
  const [docs, setDocs] = useState(initialDocs);
  const [newDocLabel, setNewDocLabel] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const toggleDoc = async (docId, currentState) => {
    setDocs((prev) => prev.map((d) => (d.id === docId ? { ...d, is_completed: !currentState } : d)));

    try {
      await fetch("/api/immigration/update-document", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: docId, is_completed: !currentState }),
      });
    } catch (err) {
      console.error("Failed to sync checkbox:", err);
      setDocs((prev) => prev.map((d) => (d.id === docId ? { ...d, is_completed: currentState } : d)));
    }
  };

  const addCustomDoc = async () => {
    if (!newDocLabel.trim() || isAdding) return;

    setIsAdding(true);
    try {
      const response = await fetch("/api/immigration/add-custom-document", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file_id: fileId, label: newDocLabel, category: "custom" }),
      });

      const addedDoc = await response.json();
      setDocs((prev) => [...prev, addedDoc]);
      setNewDocLabel("");
    } catch (err) {
      console.error("Error adding custom document:", err);
    } finally {
      setIsAdding(false);
    }
  };

  const handleRemoveDocument = async (documentIdToRemove) => {
    if (!window.confirm("Are you sure you want to remove this document from the client's checklist?")) {
      return;
    }

    const updatedDocuments = docs.filter((doc) => doc.id !== documentIdToRemove);

    setDocs(updatedDocuments);

    try {
      await fetch("/api/immigration/delete-document", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: documentIdToRemove,
          is_deleted: true,
        }),
      });
    } catch (error) {
      console.error("Failed to remove document:", error);
      alert("Failed to update the checklist. Please refresh and try again.");
    }
  };

  return (
    <div className="doc-checklist-container">
      <div className="doc-section">
        {docs.map((doc) => (
          <label key={doc.id} className={`doc-item ${doc.category}`}>
            <input
              type="checkbox"
              checked={doc.is_completed}
              onChange={() => toggleDoc(doc.id, doc.is_completed)}
            />
            <div className="doc-content">
              <span className="doc-label">{doc.label}</span>
              {doc.category !== "required" && (
                <span className={`badge-${doc.category}`}>{" (" + doc.category + ")"}</span>
              )}
            </div>
            {!doc.is_completed && (
              <button
                className="btn-remove-doc"
                onClick={() => handleRemoveDocument(doc.id)}
                title="Remove from checklist"
              >
                ✕
              </button>
            )}
          </label>
        ))}
      </div>

      <div className="add-custom-row">
        <input
          type="text"
          placeholder="Add extra document requirement..."
          value={newDocLabel}
          onChange={(e) => setNewDocLabel(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addCustomDoc()}
        />
        <button onClick={addCustomDoc} disabled={isAdding}>
          {isAdding ? "..." : "Add"}
        </button>
      </div>
    </div>
  );
};

export default DocumentChecklist;
