import React from "react";

function TodoForm() {
  return (
    <div className="flex flex-col items-end gap-3 mt-4 p-3 border-2 border-app-border rounded-xl ">
      <div className="text-end ">
        <p className="text-app-surface text-xl font-bold mb-1">
          ایجاد کار جدید
        </p>
        <span className="text-app-primary text-[12px]">
          یک کار جدید به لیست خود اضافه کنید
        </span>
      </div>

      <form className="w-full flex flex-row-reverse items-center gap-2">
        <input
          placeholder="مثلا مطالعه React"
          className="w-[50%] placeholder:text-app-primary-hover placeholder:text-end text-app-surface outline-none border-2 border-app-border rounded-xl p-3"
        />
        <div className="border-2 border-app-border rounded-xl p-3 text-app-surface">
          1405/01/10
        </div>

        <select className="border-2 border-app-border rounded-xl p-3 text-app-surface bg-app-background text-[15px]">
          <option>اولویت متوسط</option>
          <option>اولویت بالا</option>
        </select>

        <select className="border-2 border-app-border rounded-xl p-3 text-app-surface bg-app-background text-[15px]">
          <option>کار💼</option>
          <option>👤 شخصی</option>
          <option>📚 مطالعه </option>
          <option>🏃 سلامتی </option>
        </select>

        <button
          type="submit"
          className="w-[18%] font-bold text-white bg-violet-600 hover:bg-violet-700 p-3 rounded-xl cursor-pointer"
        >
          {" "}
          افزودن +{" "}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
