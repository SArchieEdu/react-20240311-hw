import { useState } from "react";
import { RestaurantTabs } from "../restaurant-tabs/component";
import { Restaurant } from "../restaurant/component";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(null);

  return (
    <div>
      <RestaurantTabs
        onTabClick={setActiveRestaurantId}
        activeRestaurantId={activeRestaurantId}
      />
      {activeRestaurantId ? (
        <Restaurant restaurantId={activeRestaurantId} />
      ) : (
        <span>SelectRestaurant</span>
      )}
    </div>
  );
};
