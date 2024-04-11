import { useSelector } from "react-redux";
import { Restaurant } from "./component";

/* eslint-disable react/jsx-key */
export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector(
    (state) => state.restaurant.entities[restaurantId]
  );

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
