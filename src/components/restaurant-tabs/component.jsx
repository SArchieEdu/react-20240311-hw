import { RestaurantTabContainer } from "../restaurant-tab/container";

export const RestaurantTabs = ({ restaurantIds }) => {
  return (
    <div>
      {restaurantIds.map((restaurantId) => (
        <RestaurantTabContainer
          key={restaurantId}
          restaurantId={restaurantId}
        />
      ))}
    </div>
  );
};
