type Theme = "light" | "dark";

export default interface ThemeStore {
  theme: Theme | "";
  setTheme: (theme: Theme) => void;
}
