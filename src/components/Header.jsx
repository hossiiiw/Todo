import { useContext } from "react";
import { AppContext } from "../context/ProjectContext";

function Header() {
  const { theme, ToggleTheme } = useContext(AppContext);
  return (
    <div className="w-full rounded-xl bg-app-primary p-3 text-app-surface font-bold flex items-center justify-between">
      <div>
        <div className="flex items-center gap-1">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9900ff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-square-check-big preview-icon"
            >
              <path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" />
              <path d="m9 11 3 3L22 4" />
            </svg>
          </span>
          <p>TodoList</p>
        </div>
        <p className="text-[15px] font-normal">Smart task management</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={ToggleTheme} className="cursor-pointer">
          {theme === true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </button>
        <button className="cursor-pointer bg-app-border p-1 pl-2 pr-2 rounded-2xl">EN 🌐</button>
      </div>
    </div>
  );
}

export default Header;
