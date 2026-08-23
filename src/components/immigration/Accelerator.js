// Ported from ../immigration (immigrationAccelerator/Accelerator.tsx).
// Admin dashboard: lists all client files.
import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { FaSyncAlt, FaPlus, FaSignOutAlt } from "react-icons/fa";
import NewFileModal from "./NewFileModal";
import { getSupabaseBrowser } from "@utils/supabaseClient";

const BASEURL = "/admin";

const Accelerator = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/immigration/get-files");
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setFiles(data);
    } catch (error) {
      console.error("Error fetching files:", error);
    } finally {
      setLoading(false);
    }
  };

  const sortedFiles = useMemo(() => {
    return [...files]
      .filter((f) => f.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => {
        const dateA = new Date(a.last_edited).getTime();
        const dateB = new Date(b.last_edited).getTime();
        if (dateA !== dateB) return dateB - dateA;

        if (a.type !== b.type) return a.type.localeCompare(b.type);

        return a.name.localeCompare(b.name);
      });
  }, [files, searchTerm]);

  if (loading) return <div className="loading-state">Loading your files...</div>;

  const handleCreationSuccess = (id) => {
    router.push(`${BASEURL}/${id}`);
  };

  const handleSignOut = async () => {
    await getSupabaseBrowser().auth.signOut();
    router.push("/admin/login");
  };

  return (
    <div className="immigration-page">
      <header className="dashboard-header">
        <h1>Client Files</h1>
        <div className="header-controls">
          <input
            type="text"
            placeholder="Search by name..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={fetchFiles} className="refresh-btn">
            <FaSyncAlt />
          </button>
          <button className="btn-primary main-cta" onClick={() => setIsModalOpen(true)}>
            <div className="cta-Icon">
              <FaPlus />
            </div>
          </button>
          <button onClick={handleSignOut} className="refresh-btn" title="Sign out">
            <FaSignOutAlt />
          </button>
        </div>
      </header>

      <NewFileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleCreationSuccess}
      />

      <div className="file-list-container">
        {sortedFiles.length > 0 ? (
          sortedFiles.map((file) => (
            <div
              key={file.id}
              className="file-card"
              onClick={() => router.push(`${BASEURL}/${file.id}`)}
            >
              <div className="file-info">
                <span className="file-name">{file.name}</span>
                <span className="file-type">{file.type}</span>
              </div>
              <div
                className={`status-badge status-${file.status
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              >
                {file.status}
              </div>
            </div>
          ))
        ) : searchTerm.length > 0 ? (
          <div className="empty-state">No files found matching &quot;{searchTerm}&quot;</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Accelerator;
