import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

function AppContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("LocalTheme") || "light",
  );

  const [language, setLanguage] = useState(
    localStorage.getItem("localLang") || "FA",
  );

  const [date, setDate] = useState("");
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("todos");

    return savedData ? JSON.parse(savedData) : [];
  });

  const [completTodo, setCompleteTodo] = useState();
  // -------------------toggle language func--------------------
  const ToggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "FA" ? "EN" : "FA";
      localStorage.setItem("localLang", newLanguage);
      document.documentElement.dir = newLanguage === "FA" ? "rtl" : "ltr";
      return newLanguage;
    });
  };

  useEffect(() => {
    document.documentElement.dir = language === "FA" ? "rtl" : "ltr";
  }, [language]);
  // -------------------end toggle language func--------------------

  // --------------------Toggle theme func----------------------
  const ToggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("LocalTheme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");

      return newTheme;
    });
  };
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // --------------------end Toggle theme func----------------------

  // --------------------------date func--------------------------
  const getDate = async () => {
    try {
      const response = await axios
        .get(
          "https://www.homacrm.com/api/v1/tools/datetime?timezone=Asia/Tehran",
        )
        .then((res) => {
          setDate(res.data.data.jalali);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDate();
  }, []);
  // --------------------------end date func--------------------------

  // -----------------------data func------------------------------
  const getData = (newData) => {
    setData([...data, newData]);
    localStorage.setItem("todos", JSON.stringify(data));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);
  // -----------------------end data func------------------------------

  // -------------update status -----------------------------
  const getTodoStatus = (id) => {
    setData((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo,
      ),
    );
  };
  // -------------update status -----------------------------

  // -----------------Todo completed---------------------------
  const countTodoCompleted = () => {
    const count = data.filter((todo) => todo.complete).length;
    setCompleteTodo(count);
  };

  useEffect(() => {
    countTodoCompleted();
  }, [data]);
  // -----------------Todo completed---------------------------
  // -----------------Delete all todo---------------------
  const deleteAllTodos = () => {
    setData([]);
    localStorage.clear("todos");
  };
  // -----------------Delete all todo---------------------
  // -----------------Delete todo--------------------------

  const deleteTodo = (id) => {
    setData((prev) => prev.filter((todo) => todo.id !== id));
  };

  // -----------------Delete todo--------------------------

  // ------------------Edit Todo-------------------------

  const editTodo = (id, updatedData) => {
    setData((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updatedData } : todo)),
    );
  };

  // ------------------Edit Todo-------------------------

  return (
    <AppContext.Provider
      value={{
        theme,
        date,
        language,
        data,
        completTodo,
        ToggleTheme,
        ToggleLanguage,
        getData,
        deleteAllTodos,
        getTodoStatus,
        deleteTodo,
        editTodo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
