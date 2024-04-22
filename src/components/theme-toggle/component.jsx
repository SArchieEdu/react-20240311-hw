import { useMemo } from "react";
import { ThemeContext, useToggleCurrentTheme } from "../../contexts/theme";
import { Button } from "../button/component";

export const ThemeToggle = () => {
  const toggleTheme = useToggleCurrentTheme();
  const headerTheme = useMemo(() => ({ theme: "default" }), []);

  return (
    <ThemeContext.Provider value={headerTheme}>
      <Button onClick={toggleTheme}>ToggleTheme</Button>
    </ThemeContext.Provider>
  );
};
