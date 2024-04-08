import { useMemo } from "react";
import { ThemeContext, useCurrentTheme } from "../../contexts/theme";
import { Button } from "../button/component";

export const ThemeToggle = () => {
  const { toggleTheme } = useCurrentTheme();
  const headerTheme = useMemo(() => ({ theme: "default" }), []);

  return (
    <ThemeContext.Provider value={headerTheme}>
      <Button onClick={toggleTheme}>ToggleTheme</Button>
    </ThemeContext.Provider>
  );
};
