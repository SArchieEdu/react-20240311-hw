/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { RestaurantTabs } from "./component";

export const RestaurantTabsContainer = () => {
  const restaurantIds = useSelector((state) => state.restaurant.ids);

  return <RestaurantTabs restaurantIds={restaurantIds} />;
};
