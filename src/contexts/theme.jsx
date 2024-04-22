import { useCallback } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext("default");
export const ThemeSetterContext = createContext();

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
export function useToggleCurrentTheme() {
  return useContext(ThemeSetterContext);
}

export const ThemeContextProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSetterContext.Provider value={toggleTheme}>
        {children}
      </ThemeSetterContext.Provider>
    </ThemeContext.Provider>
  );
};
