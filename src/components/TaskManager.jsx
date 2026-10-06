import React, { useContext } from "react";
import { AppContext } from "../context/ProjectContext";

function TaskManager() {
  const { language } = useContext(AppContext);
  return (
    <div className="w-full flex items-center justify-between gap-4">
      <div className="text-app-surface w-full flex flex-col gap-1 mt-4 border-2 border-app-border p-3 rounded-xl">
        <span>📋</span>
        <p className="text-2xl font-bold">0</p>
        <span className="text-app-muted">
          {language === "FA" ? "کل کار ها" : "Total tasks"}
        </span>
      </div>
      <div className="text-app-surface w-full flex flex-col gap-1 mt-4 border-2 border-app-border p-3 rounded-xl">
        <span>⏳</span>
        <p className="text-2xl font-bold">0</p>
        <span className="text-app-muted">
          {language === "FA" ? " در حال انجام" : " Active"}
        </span>
      </div>

      <div className="text-app-surface w-full flex flex-col gap-1 mt-4 border-2 border-app-border p-3 rounded-xl">
        <span>✓</span>
        <p className="text-2xl font-bold">0</p>
        <span className="text-app-muted">
          {language === "FA" ? "انجام‌شده " : " Complete"}
        </span>
      </div>
      <div className="text-app-surface w-full flex flex-col  gap-1 mt-4 border-2 border-app-border  p-3 rounded-xl">
        <span>⚠️</span>
        <p className="text-2xl font-bold">0</p>
        <span className="text-app-muted">
          {language === "FA" ? "عقب‌افتاده " : "Overdue "}
        </span>
      </div>
    </div>
  );
}

export default TaskManager;
