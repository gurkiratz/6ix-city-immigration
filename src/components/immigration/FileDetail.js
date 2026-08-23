// Ported from ../immigration (immigrationAccelerator/FileDetail.tsx).
// Admin view of a single client file: status, tasks, documents, and the
// client's questionnaire answers.
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TaskRunner from "./TaskRunner";
import DocumentChecklist from "./DocumentChecklist";

const CopyableAnswer = ({ answer }) => {
  const [copied, setCopied] = useState(false);

  const displayValue = !answer ? "Not answered" : answer.toString();

  const handleCopy = () => {
    if (!answer) return;
    navigator.clipboard.writeText(displayValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="copyable-wrapper">
      <button
        className={`copyable-answer-btn ${!answer ? "empty" : ""}`}
        onClick={handleCopy}
        disabled={!answer}
        title={answer ? "Click to copy" : ""}
      >
        {displayValue}
      </button>
      {copied && <span className="copied-tooltip">(copied)</span>}
    </div>
  );
};

const FileDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [file, setFile] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clientForm, setClientForm] = useState(null);

  useEffect(() => {
    const fetchFullFileData = async () => {
      try {
        const response = await fetch(`/api/immigration/get-file-detail?id=${id}`);
        const data = await response.json();

        if (data.file) setFile(data.file);
        if (data.tasks) setTasks(data.tasks);
        if (data.documents) setDocs(data.documents);
        if (data.clientForm) setClientForm(data.clientForm);
      } catch (err) {
        console.error("Error loading file detail:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchFullFileData();
  }, [id]);

  const toggleFormSection = async (sectionId, currentStatus) => {
    if (!clientForm) return;

    const updatedSections = clientForm.sections.map((sec) =>
      sec.id === sectionId ? { ...sec, is_active: !currentStatus } : sec
    );

    setClientForm({ ...clientForm, sections: updatedSections });

    try {
      await fetch("/api/immigration/update-form-sections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form_id: clientForm.id, sections: updatedSections }),
      });
    } catch (err) {
      console.error("Failed to update sections:", err);
      setClientForm({ ...clientForm, sections: clientForm.sections });
    }
  };

  const handleTaskComplete = async (taskId, newStatus) => {
    await fetch("/api/immigration/update-task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: taskId, is_completed: newStatus }),
    });
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  const renderFields = (fields) => {
    return fields.map((field) => {
      if (field.type === "repeater") {
        return field.answer
          .map((item, index) => (
            <div key={index} className="repeater-item">
              <span className="field-label">
                {field.label} #{index + 1}
              </span>
              {field.subFields?.map((subField) => (
                <div key={subField.id} className="form-group">
                  <label>{subField.label}</label>
                  <CopyableAnswer answer={item[subField.id]} />
                </div>
              ))}
            </div>
          ))
          .reverse();
      } else {
        return (
          <div key={field.id} className="answer-field">
            <span className="field-label">{field.label}</span>
            <CopyableAnswer answer={field.answer} />
          </div>
        );
      }
    });
  };

  if (loading) return <div className="loading-state">Accessing file...</div>;
  if (!file) return <div>File not found.</div>;

  const handleStatusChange = async (newStatus) => {
    if (!file) return;

    const oldStatus = file.status;
    setFile({ ...file, status: newStatus });

    try {
      await fetch("/api/immigration/update-file-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: file.id, status: newStatus }),
      });
    } catch (err) {
      setFile({ ...file, status: oldStatus });
      console.error("Status update failed", err);
    }
  };

  return (
    <div className="immigration-page detail-view">
      <button className="btn-back" onClick={() => router.push("/admin")}>
        ← Back to Dashboard
      </button>

      <header className="file-header">
        <div>
          <h1>{file.name}</h1>
          <span className="file-type-tag">{file.type}</span>
        </div>
        <div className={`status-pill status-${file.status.toLowerCase().replace(/ /g, "-")}`}>
          {file.status}
        </div>
      </header>

      <select
        className={`status-selector status-${file.status.toLowerCase().replace(/ /g, "-")}`}
        value={file.status}
        onChange={(e) => handleStatusChange(e.target.value)}
      >
        <option value="Initiated">Initiated</option>
        <option value="Retainer Signed">Retainer Signed</option>
        <option value="Pendency Sent">Pendency Sent</option>
        <option value="Waiting for Signatures">Waiting for Signatures</option>
        <option value="Filed">Filed</option>
      </select>

      <section className="detail-section">
        <h3 className="section-label">Active Workflow</h3>
        <TaskRunner initialTasks={tasks} onTaskToggle={handleTaskComplete} />
      </section>

      {clientForm && (
        <section className="detail-section form-manager-section">
          <h3 className="section-label">Client Intake Form</h3>

          <div className="share-link-box">
            <span className="link-label">Secure Client Link:</span>
            <input
              type="text"
              readOnly
              value={
                typeof window !== "undefined"
                  ? `${window.location.origin}/intake/${clientForm.share_token}`
                  : `/intake/${clientForm.share_token}`
              }
            />
            <button
              className="btn-secondary"
              onClick={() =>
                navigator.clipboard.writeText(`${window.location.origin}/intake/${clientForm.share_token}`)
              }
            >
              Copy Link
            </button>
          </div>

          <div className="form-sections-list">
            <h4 className="section-label form-sections-label">Manage Form Sections</h4>
            {clientForm.sections.map((section) => (
              <div key={section.id} className={`form-section-item ${section.is_active ? "active" : "inactive"}`}>
                <div className="section-info">
                  <strong>{section.title}</strong>
                  <span className="field-count">{section.fields.length} questions</span>
                  <button
                    className={section.is_active ? "btn-remove" : "btn-add"}
                    onClick={() => toggleFormSection(section.id, section.is_active)}
                  >
                    {section.is_active ? "Remove" : "Add Section"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="client-answers-view">
            <h4 className="answers-title">Review Client Answers</h4>

            {clientForm.sections
              .filter((s) => s.is_active)
              .map((section) => (
                <div key={section.id} className="answer-section">
                  <h5>{section.title}</h5>
                  <div className="answer-grid">{renderFields(section.fields)}</div>
                </div>
              ))}
          </div>
        </section>
      )}

      <section className="detail-section">
        <h3 className="section-label">Document Tracking</h3>
        <DocumentChecklist fileId={file.id} initialDocs={docs} />
      </section>
    </div>
  );
};

export default FileDetail;
