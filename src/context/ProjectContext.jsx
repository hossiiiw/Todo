import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

function AppContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("LocalTheme") || "light",
  );

  const [language, setLanguage] = useState(
    localStorage.getItem("localLang") || "FA",
  );

  // toggle language func
  const ToggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "FA" ? "EN" : "FA";
      localStorage.setItem("localLang", newLanguage);
      document.documentElement.dir = newLanguage === "FA" ? "rtl" : "ltr";

      console.log(newLanguage);
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

  return (
    <AppContext.Provider
      value={{ theme, language, ToggleTheme, ToggleLanguage }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
