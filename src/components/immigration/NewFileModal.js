// Ported from ../immigration (immigrationAccelerator/NewFileModal.tsx).
import React, { useState } from "react";

const NewFileModal = ({ isOpen, onClose, onSuccess }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("Spousal Sponsorship");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/immigration/create-file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, type, status: "Initiated" }),
      });

      if (response.ok) {
        const result = await response.json();
        onSuccess(result.id);
        onClose();
        setName("");
      }
    } catch (err) {
      console.error("Creation failed", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create New Client File</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Client Name</label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Doe"
            />
          </div>

          <div className="form-group">
            <label>Application Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="PGWP">PGWP</option>
              <option value="Study Permit">Study Permit</option>
              <option value="Visitor Visa">Visitor Visa</option>
              <option value="Super Visa">Super Visa</option>
              <option value="Spousal Sponsorship">Spousal Sponsorship</option>
              <option value="Express Entry">Express Entry</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create File"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewFileModal;
