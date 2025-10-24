import { createContext, useContext, useEffect, useState } from "react";

const ThemeProviderContext = createContext({
  theme: "dark",
  setTheme: () => {},
});

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "portfolio-theme",
  ...props
}) {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem(storageKey) || defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.setProperty('--app-bg', '#18181b');
      root.style.setProperty('--app-text', '#f3f4f6');
      root.style.setProperty('--app-bg-image', 'url("/src/assets/backgrounds/background when dark.jpg")');
      root.style.setProperty('--app-card-bg', '#111112');
    } else {
      root.classList.add("light");
      root.style.setProperty('--app-bg', '#fff');
      root.style.setProperty('--app-text', '#18181b');
      root.style.setProperty('--app-bg-image', 'none');
      root.style.setProperty('--app-card-bg', '#fff');
    }
  }, [theme]);


  const setTheme = (newTheme) => {
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = { theme, setTheme, toggleTheme };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
