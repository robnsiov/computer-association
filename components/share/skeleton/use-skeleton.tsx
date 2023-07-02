import { useLayoutEffect, useState } from "react";

const useSkeleton = () => {
  const [theme, setTheme] = useState("dark");
  useLayoutEffect(() => {
    const theme = localStorage.theme;
    if (theme) setTheme(theme);
  }, []);
  return { theme };
};
export default useSkeleton;
