import { useCallback } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext("default");

export function useTheme(defaultTheme = "default") {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) =>
      currentTheme === "default" ? "dark" : "default"
    );
  }, []);

  return { theme, toggleTheme };
}

export function useCurrentTheme() {
  return useContext(ThemeContext);
}
