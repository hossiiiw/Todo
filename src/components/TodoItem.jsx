import React, { useContext, useState } from "react";
import { AppContext } from "../context/ProjectContext";
import EditModal from "./EditModal";

function TodoItem({
  id,
  name,
  priority,
  complete,
  type,
  date,
  month,
  time,
  weekday,
  onEdit,
}) {
  const { language, getTodoStatus, deleteTodo } = useContext(AppContext);

  return (
    <>
      <div className="w-full bg-app-border  flex flex-row-reverse items-center justify-between p-4 rounded-xl">
        <div className="flex items-center">
          <div className="flex flex-col items-end gap-2 mr-4">
            <div className="w-full flex items-center justify-between gap-2">
              <p className="bg-white text-[12px] rounded-2xl p-1 pl-2 pr-2">
                {type}
              </p>
              <p className="bg-white text-[12px] rounded-2xl p-1 pl-2 pr-2">
                {priority}
              </p>
              <p className="font-bold text-app-surface">{name}</p>
            </div>
            <p className="text-app-surface">
              {date} | {month} | {weekday} |{time}
            </p>
          </div>
          <input
            type="checkbox"
            checked={complete}
            onChange={(e) => {
              const value = e.target.checked;
              getTodoStatus(id, e.target.checked);
              console.log(value);
            }}
            className={language === "FA" ? "mr-4" : ""}
          />
        </div>
        <div className="flex gap-4">
          <span
            onClick={() => deleteTodo(id)}
            className="hover:bg-app-danger rounded-[10px] cursor-pointer p-1"
          >
            🗑️
          </span>
          <span
            onClick={() => onEdit(id)}
            className="hover:bg-app-primary rounded-[10px] cursor-pointer p-1"
          >
            ✏️
          </span>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
