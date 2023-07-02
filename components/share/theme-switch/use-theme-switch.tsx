import { useLayoutEffect, useState } from "react";

const useThemeSwitch = () => {
  const [isDarkMode, setDarkMode] = useState(true);

  useLayoutEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = (checked: boolean) => {
    const darkTheme = localStorage.theme === "dark" ? true : false;
    if (darkTheme) document.documentElement.classList.remove("dark");
    else document.documentElement.className = "dark";
    localStorage.theme = !darkTheme ? "dark" : "light";
    setDarkMode(!checked);
  };
  return { isDarkMode, toggleDarkMode };
};
export default useThemeSwitch;
