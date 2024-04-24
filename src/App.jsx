import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/component";

import { RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home/component";
import { RestaurantsContainer } from "./components/restaurants/container";
import { RestaurantContainer } from "./components/restaurant/container";
import { MenuContainer } from "./components/menu/container";
import { ReviewsContainer } from "./components/reviews/container";
import { Navigate } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/theme";
import { UserContextProvider } from "./contexts/user";
import {
  Menu,
  MenuGroup,
  MenuItem,
} from "./components/compound-component/component";
import { ErrorBoundary } from "./components/error-boundary/component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/restaurants",
        element: <RestaurantsContainer />,
        children: [
          {
            path: ":restaurantId",
            element: <RestaurantContainer />,
            children: [
              { index: true, element: <Navigate to="./menu" replace /> },
              { path: "menu", element: <MenuContainer /> },
              { path: "reviews", element: <ReviewsContainer /> },
            ],
          },
        ],
      },
    ],
  },
]);

export const App = () => {
  return (
    <ErrorBoundary>
      <ThemeContextProvider>
        <UserContextProvider>
          <Menu>
            <MenuItem name="Main" />
            <MenuGroup name="Films">
              <MenuItem name="Top10" />
              <MenuItem name="Recommendation" />
              <MenuGroup name="Selections">
                <MenuItem name="Popular" />
                <MenuItem name="Action" />
                <MenuGroup name="Fantasy">
                  <MenuItem name="2022" />
                  <MenuItem name="2023" />
                </MenuGroup>
              </MenuGroup>
            </MenuGroup>
            <MenuGroup name="TvSeries">
              <MenuItem name="Top10" />
              <MenuItem name="Recommendation" />
            </MenuGroup>
          </Menu>
          <RouterProvider router={router} />
        </UserContextProvider>
      </ThemeContextProvider>
    </ErrorBoundary>
  );
};
