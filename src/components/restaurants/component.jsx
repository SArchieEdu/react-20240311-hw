import { useState } from "react";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import { RestaurantContainer } from "../restaurant/container";
import { Button } from "../button/component";

export const Restaurants = ({ onRefresh }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(null);

  return (
    <div>
      <RestaurantTabsContainer
        onTabClick={setActiveRestaurantId}
        activeRestaurantId={activeRestaurantId}
      />
      <Button onClick={onRefresh}>Refresh</Button>
      {activeRestaurantId ? (
        <RestaurantContainer restaurantId={activeRestaurantId} />
      ) : (
        <span>SelectRestaurant</span>
      )}
    </div>
  );
};
