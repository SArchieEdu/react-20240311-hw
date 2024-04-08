/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { RestaurantTab } from "../restaurant-tab/component";

export const RestaurantTabs = ({ onTabClick, activeRestaurantId }) => {
  const restaurantIds = useSelector((state) => state.restaurant.ids);

  return (
    <div>
      {restaurantIds?.map((id) => (
        <RestaurantTab
          restaurantId={id}
          onClick={() => onTabClick(id)}
          isActive={id === activeRestaurantId}
        />
      ))}
    </div>
  );
};
