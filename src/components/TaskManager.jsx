import React, { useContext } from "react";
import { AppContext } from "../context/ProjectContext";

function TaskManager() {
  const { language, data, completTodo } = useContext(AppContext);
  const totalTodos = data.length;

  const activeTodos = data.filter((todo) => !todo.complete).length;

  const completedTodos = data.filter((todo) => todo.complete).length;
  return (
    <div className="w-full grid grid-cols-2  md:flex items-center justify-between gap-4">
      <div className="text-app-surface w-full flex flex-col gap-1 mt-4 border-2 border-app-border p-3 rounded-xl">
        <span>📋</span>
        <p className="text-2xl font-bold">{totalTodos}</p>
        <span className="text-app-muted">
          {language === "FA" ? "کل کار ها" : "Total tasks"}
        </span>
      </div>
      <div className="text-app-surface w-full flex flex-col gap-1 mt-4 border-2 border-app-border p-3 rounded-xl">
        <span>⏳</span>
        <p className="text-2xl font-bold">{activeTodos}</p>
        <span className="text-app-muted">
          {language === "FA" ? " در حال انجام" : " Active"}
        </span>
      </div>

      <div className="text-app-surface w-full flex flex-col gap-1 mt-4 border-2 border-app-border p-3 rounded-xl">
        <span>✓</span>
        <p className="text-2xl font-bold">{completedTodos}</p>
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
