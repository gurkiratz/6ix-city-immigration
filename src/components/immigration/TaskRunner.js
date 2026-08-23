// Ported from ../immigration (immigrationAccelerator/TaskRunner.tsx).
import React, { useState } from "react";

const TaskRunner = ({ initialTasks, onTaskToggle }) => {
  const [allTasks, setAllTasks] = useState(initialTasks);
  const [queue, setQueue] = useState(initialTasks.filter((t) => !t.is_completed));
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCompleteRunner = async () => {
    if (queue.length === 0 || isProcessing) return;

    setIsProcessing(true);
    const completedTask = queue[0];

    try {
      await onTaskToggle(completedTask.id, false);

      setQueue((prev) => prev.slice(1));

      setAllTasks((prev) =>
        prev.map((t) => (t.id === completedTask.id ? { ...t, is_completed: true } : t))
      );
    } catch (err) {
      console.error("Failed to complete task:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSkip = () => {
    if (queue.length <= 1) return;

    setQueue((prev) => {
      const [current, ...rest] = prev;
      return [...rest, current];
    });
  };

  const handleListToggle = async (taskId, currentStatus) => {
    if (isProcessing) return;
    setIsProcessing(true);

    const newStatus = !currentStatus;

    setAllTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, is_completed: newStatus } : t))
    );

    if (newStatus === true) {
      setQueue((prev) => prev.filter((t) => t.id !== taskId));
    } else {
      const taskToAdd = allTasks.find((t) => t.id === taskId);
      if (taskToAdd) {
        setQueue((prev) => [...prev, { ...taskToAdd, is_completed: false }]);
      }
    }

    try {
      await onTaskToggle(taskId, newStatus);
    } catch (err) {
      console.error("Failed to toggle task:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  const currentTask = queue[0];

  return (
    <div className="task-runner-wrapper">
      {queue.length === 0 ? (
        <div className="task-card-focus empty-state">
          <h3>Queue Clear</h3>
          <p>No pending tasks for this file.</p>
        </div>
      ) : (
        <div key={currentTask.id} className="task-runner-container">
          <div className="task-card-focus">
            <div className="task-header">
              <span className="task-count">Next Priority</span>
              <div className="session-indicator" title="Session-only order">
                ⏱
              </div>
            </div>

            <h2>{currentTask.label}</h2>
            <p>{currentTask.description}</p>

            <div className="task-actions">
              <button
                className="btn-skip"
                onClick={handleSkip}
                disabled={queue.length <= 1 || isProcessing}
              >
                Skip for now
              </button>
              <button className="btn-complete" onClick={handleCompleteRunner} disabled={isProcessing}>
                {isProcessing ? "Saving..." : "Mark Complete"}
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="detail-section task-list-section" style={{ marginTop: "40px" }}>
        <div className="section-header">
          <h3 className="section-label">Full Task History</h3>
          <span className="completion-tracker">
            {allTasks.filter((t) => t.is_completed).length} / {allTasks.length} Completed
          </span>
        </div>

        <div className="task-list">
          {allTasks.map((task) => (
            <div key={task.id} className={`list-item ${task.is_completed ? "is-completed" : ""}`}>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={task.is_completed}
                  onChange={() => handleListToggle(task.id, task.is_completed)}
                  disabled={isProcessing}
                />
                <span className="checkmark"></span>
              </label>

              <div className="item-details">
                <span className="item-label">{task.label}</span>
                {task.description && <span className="item-desc">{task.description}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TaskRunner;
