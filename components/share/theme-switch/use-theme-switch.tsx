import { useLayoutEffect, useState } from "react";

const useThemeSwitch = () => {
  const [isDarkMode, setDarkMode] = useState(true);

  useLayoutEffect(() => {
    const theme = localStorage.theme;
    console.log(theme);
    if (theme) setDarkMode(theme === "dark" ? true : false);
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
