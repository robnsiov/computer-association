"use client";
import useThemeSwitch from "./use-theme-switch";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useThemeSwitch();
  return (
    <>
      <div className="w-full md:pr-4 pr-5">
        <DarkModeSwitch
          checked={!isDarkMode}
          sunColor="#94a3b8"
          moonColor="#d1d5db"
          onChange={toggleDarkMode}
          size={22}
        />
      </div>
    </>
  );
};
export default ThemeSwitch;
