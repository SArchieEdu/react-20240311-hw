import { useSelector } from "react-redux";
import { Tab } from "../tab/component";

export const RestaurantTabContainer = ({ restaurantId }) => {
  const restaurant = useSelector(
    (state) => state.restaurant.entities[restaurantId]
  );

  if (!restaurant) {
    return null;
  }

  return (
    <Tab path={`/restaurants/${restaurantId}`}>
      <span>{restaurant.name}</span>
    </Tab>
  );
};
