/* eslint-disable react/jsx-key */
import { RestaurantTabContainer } from "../restaurant-tab/container";

export const RestaurantTabs = ({
  onTabClick,
  activeRestaurantId,
  restaurantIds,
}) => {
  return (
    <div>
      {restaurantIds?.map((id) => (
        <RestaurantTabContainer
          restaurantId={id}
          onClick={() => onTabClick(id)}
          isActive={id === activeRestaurantId}
        />
      ))}
    </div>
  );
};
