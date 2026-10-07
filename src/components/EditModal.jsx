import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../context/ProjectContext";

function EditModal({ todo, onClose }) {
  const { editTodo } = useContext(AppContext);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (todo) {
      reset({
        name: todo.Todo,
        priority: todo.Priority,
        type: todo.Type,
      });
    }
  }, [todo, reset]);

  const onSubmit = (formData) => {
    editTodo(todo.id, {
      Todo: formData.name,
      Priority: formData.priority,
      Type: formData.type,
    });

    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="w-full max-w-lg rounded-2xl bg-app-border p-6 shadow-2xl">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-app-text">ویرایش Todo</h2>

            <button
              onClick={onClose}
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full
                   text-app-muted transition hover:bg-app-surface
                   hover:text-app-danger"
            >
              ✕
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Title */}
            <div>
              <label className="mb-2 block text-sm font-medium text-app-text">
                عنوان Todo
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="عنوان Todo را وارد کنید..."
                className="w-full rounded-xl border border-app-border
                     bg-app-background px-4 py-3 text-app-text
                     outline-none transition
                     placeholder:text-app-muted
                     focus:border-app-primary
                     focus:ring-2 focus:ring-app-primary/20"
              />
            </div>

            {/* Priority & Type */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-app-text">
                  اولویت
                </label>

                <select
                  {...register("priority")}
                  className="w-full rounded-xl border border-app-border
                       bg-app-background px-4 py-3 text-app-text
                       outline-none transition
                       focus:border-app-primary
                       focus:ring-2 focus:ring-app-primary/20"
                >
                  <option value="low">کم</option>
                  <option value="medium">متوسط</option>
                  <option value="high">زیاد</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-app-text">
                  نوع
                </label>

                <select
                  {...register("type")}
                  className="w-full rounded-xl border border-app-border
                       bg-app-background px-4 py-3 text-app-text
                       outline-none transition
                       focus:border-app-primary
                       focus:ring-2 focus:ring-app-primary/20"
                >
                  <option value="work">کار</option>
                  <option value="study">مطالعه</option>
                  <option value="personal">شخصی</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="rounded-xl border border-app-border
                     px-5 py-3 font-medium text-app-success-hover
                     transition hover:bg-app-danger"
              >
                انصراف
              </button>

              <button
                type="submit"
                className="rounded-xl bg-app-primary px-5 py-3
                     font-medium text-white transition
                     hover:bg-app-primary-hover"
              >
                ذخیره تغییرات
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditModal;
