import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    // <div className="w-full flex flex-col items-center mt-4 p-3 border-2 border-app-border rounded-xl ">
    //   <span className="bg-app-border p-3 rounded-xl text-2xl">📝</span>
    //   <p className="text-app-text text-2xl mt-2">کاری پیدا نشد</p>
    //   <span className="text-app-primary">هنوز کاری در این بخش وجود ندارد</span>
    // </div>
    <div className="w-full flex flex-col gap-3 mt-4 p-3 border-2 border-app-border rounded-xl ">
        <div className="p-2">
            <p className="text-app-danger">حدف همه کار ها 🧹</p>
        </div>
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default TodoList;
