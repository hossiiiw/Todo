import React, { useContext } from "react";
import { AppContext } from "../context/ProjectContext";

function TodoForm() {
  const { language } = useContext(AppContext);
  return (
    <div className="flex flex-col items-end gap-3 mt-4 p-3 border-2 border-app-border rounded-xl ">
      <div className="w-full ">
        <p className="text-app-surface text-xl font-bold mb-1">
          {language === "FA" ? "ایجاد کار جدید" : "Create new task"}
        </p>

        <span className="text-app-primary text-[12px]">
          {language === "FA"
            ? "  یک کار جدید به لیست خود اضافه کنید"
            : "Add a new task to your list."}
        </span>
      </div>

      <form className="w-full flex items-center gap-2">
        <input
          placeholder={
            language === "FA" ? "مثلا مطالعه React" : "e.g Study React"
          }
          className="w-[50%] placeholder:text-app-primary-hover  text-app-surface outline-none border-2 border-app-border rounded-xl p-3"
        />
        <div className="border-2 border-app-border rounded-xl p-3 text-app-surface">
          1405/01/10
        </div>

        <select className="border-2 border-app-border rounded-xl p-3 text-app-surface bg-app-background text-[15px]">
          <option>{language === "FA" ? "اولویت کم" : "Low priority"}</option>
          <option>
            {language === "FA" ? "اولویت متوسط" : "Medium  priority"}
          </option>
          <option>
            {language === "FA" ? "اولویت بالا" : "High  priority"}
          </option>
        </select>

        <select className="border-2 border-app-border rounded-xl p-3 text-app-surface bg-app-background text-[15px]">
          <option>{language === "FA" ? " 💼کار" : "Work 💼 "}</option>
          <option>{language === "FA" ? "👤 شخصی" : "Personal 👤"}</option>
          <option>{language === "FA" ? "📚 مطالعه" : "Study 📚"}</option>
          <option>{language === "FA" ? "🏃 سلامتی" : "Healthy 🏃"}</option>
        </select>

        <button
          type="submit"
          className="w-[18%] font-bold text-white bg-violet-600 hover:bg-violet-700 p-3 rounded-xl cursor-pointer"
        >
          {language === "FA" ? "  افزودن +" : "ADD + "}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
