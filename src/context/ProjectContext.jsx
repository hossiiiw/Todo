import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

function AppContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("LocalTheme") || "light",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  // Toggle theme func
  const ToggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";

      localStorage.setItem("LocalTheme", newTheme);

      document.documentElement.classList.toggle("dark", newTheme === "dark");

      return newTheme;
    });
  }; // Toggle theme func

  return (
    <AppContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
