import { Layout } from "./components/layout/component";
import { RestaurantsContainer } from "./components/restaurants/container";
import { ThemeContext, useTheme } from "./contexts/theme";
import { UserContext, useUser } from "./contexts/user";
import { useMemo } from "react";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  const themeContextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  const userContextValue = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <UserContext.Provider value={userContextValue}>
        <Layout>
          <RestaurantsContainer />
        </Layout>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
