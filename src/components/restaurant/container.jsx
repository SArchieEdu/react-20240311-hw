import { useSelector } from "react-redux";
import { Restaurant } from "./component";
import { useParams } from "react-router-dom";

/* eslint-disable react/jsx-key */
export const RestaurantContainer = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector(
    (state) => state.restaurant.entities[restaurantId]
  );

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
