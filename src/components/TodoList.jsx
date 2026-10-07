import React, { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import { AppContext } from "../context/ProjectContext";
import EditModal from "./EditModal";

function TodoList() {
  const { language, data, deleteAllTodos } = useContext(AppContext);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEdit = (id) => {
    const todo = data.find((item) => item.id === id);
    setSelectedTodo(todo);
    setIsEditOpen(true);
  };

  return (
    <>
      {/* <div className="w-full flex flex-col items-center mt-4 p-3 border-2 border-app-border rounded-xl ">
        <span className="bg-app-border p-3 rounded-xl text-2xl">📝</span>
        <p className="text-app-text text-2xl mt-2">
          {language == "FA" ? "کاری پیدا نشد" : "No tasks found"}
        </p>
        <span className="text-app-primary">
          {language === "FA"
            ? "هنوز کاری در این بخش وجود ندارد"
            : "There are no tasks in this section."}
        </span>
      </div> */}

      <div className="w-full flex flex-col gap-3 mt-4 p-3 border-2 border-app-border rounded-xl ">
        <div className="p-2">
          <p
            onClick={deleteAllTodos}
            className="w-[15%] text-app-danger cursor-pointer "
          >
            {language === "FA" ? "حدف همه کار ها 🧹" : "🧹 Clear completed"}
          </p>
        </div>
        {data.map((item) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              name={item.Todo}
              priority={item.Priority}
              complete={item.complete}
              type={item.Type}
              date={item.day}
              month={item.month}
              time={item.time}
              weekday={item.weekday}
              onEdit={handleEdit}
            />
          );
        })}
      </div>
      {isEditOpen && (
        <EditModal todo={selectedTodo} onClose={() => setIsEditOpen(false)} />
      )}
    </>
  );
}

export default TodoList;
