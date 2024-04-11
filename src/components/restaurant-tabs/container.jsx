/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { RestaurantTabs } from "./component";

export const RestaurantTabsContainer = (props) => {
  const restaurantIds = useSelector((state) => state.restaurant.ids);

  return <RestaurantTabs {...props} restaurantIds={restaurantIds} />;
};
