import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { AppContext } from "../context/ProjectContext";

function TodoList() {
  const { language } = useContext(AppContext);
  return (
    // <div className="w-full flex flex-col items-center mt-4 p-3 border-2 border-app-border rounded-xl ">
    //   <span className="bg-app-border p-3 rounded-xl text-2xl">📝</span>
    //   <p className="text-app-text text-2xl mt-2">
    //     {language == "FA" ? "کاری پیدا نشد" : "No tasks found"}
    //   </p>
    //   <span className="text-app-primary">
    //     {language === "FA"
    //       ? "هنوز کاری در این بخش وجود ندارد"
    //       : "There are no tasks in this section."}
    //   </span>
    // </div>
// ==================================================

    <div className="w-full flex flex-col gap-3 mt-4 p-3 border-2 border-app-border rounded-xl ">
      <div className="p-2">
        <p className="text-app-danger">
          {language === "FA" ? "حدف همه کار ها 🧹" : "🧹 Clear completed"}
        </p>
      </div>
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default TodoList;
