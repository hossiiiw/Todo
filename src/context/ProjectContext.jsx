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

  // toggle language func
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
  // toggle language func

  // Toggle theme func
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

  // Toggle theme func

  // date func
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
  // date func

  // data func

  const getData = (newData) => {
    setData([...data, newData]);
    localStorage.setItem("todos", JSON.stringify(data));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);
  // data func

  const deleteAllTodos = () => {
    setData([]);
    localStorage.clear("todos");
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        date,
        language,
        data,
        ToggleTheme,
        ToggleLanguage,
        getData,
        deleteAllTodos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
