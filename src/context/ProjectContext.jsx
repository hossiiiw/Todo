import { createContext, useContext, useState } from "react";

export const AppContext = createContext(null);

function AppContextProvider({ children }) {
  const [theme, setTheme] = useState(false);

  // Toggle theme func
  const ToggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setTheme(!theme)
  }; // Toggle theme func

  return (
    <AppContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
