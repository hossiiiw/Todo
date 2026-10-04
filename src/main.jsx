import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppContextProvider from "./context/ProjectContext.jsx";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <div className="bg-app-background min-h-screen ">
      <App />
    </div>
  </AppContextProvider>,
);
