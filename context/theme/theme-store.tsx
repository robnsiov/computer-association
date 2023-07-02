import { create } from "zustand";
import ThemeStore from "./types";

const useThemeStore = create<ThemeStore>()((setState) => ({
  theme: "",
  setTheme: (theme) => {
    setState({ theme });
  },
}));

export default useThemeStore;
