import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import { RestaurantTabContainer } from "../restaurant-tab/container";
import { Outlet } from "react-router-dom";

export const Restaurants = () => {
  return (
    <div>
      <RestaurantTabsContainer
        renderTab={(restaurantId) => (
          <RestaurantTabContainer restaurantId={restaurantId} />
        )}
      />
      <Outlet />
    </div>
  );
};
