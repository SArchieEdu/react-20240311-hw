import { useSelector } from "react-redux";
import { Tab } from "../tab/component";

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector(
    (state) => state.restaurant.entities[restaurantId]
  );

  if (!restaurant) {
    return null;
  }

  return <Tab {...props} title={restaurant.name} />;
};
