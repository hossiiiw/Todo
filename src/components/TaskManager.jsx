import React from "react";

function TaskManager() {
  return (
    <div className="w-full flex items-center justify-between gap-4">
      <div className="text-app-surface w-full flex flex-col items-end gap-1 mt-4 border-2 border-app-border  p-3 rounded-xl">
        <span>⚠️</span>
        <p className="text-2xl font-bold">0</p>
        <span className="text-app-muted"> عقب‌افتاده</span>
      </div>
      <div className="text-app-surface w-full flex flex-col items-end gap-1 mt-4 border-2 border-app-border p-3 rounded-xl">
        <span>✓</span>
        <p className="text-2xl font-bold">0</p>
        <span className="text-app-muted">انجام‌شده </span>
      </div>
      <div className="text-app-surface w-full flex flex-col items-end gap-1 mt-4 border-2 border-app-border p-3 rounded-xl">
        <span>⏳</span>
        <p className="text-2xl font-bold">0</p>
        <span className="text-app-muted">در حال انجام </span>
      </div>
      <div className="text-app-surface w-full flex flex-col items-end gap-1 mt-4 border-2 border-app-border p-3 rounded-xl">
        <span>📋</span>
        <p className="text-2xl font-bold">0</p>
        <span className="text-app-muted">کل کارها</span>
      </div>
    </div>
  );
}

export default TaskManager;
