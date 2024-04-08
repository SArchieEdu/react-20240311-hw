import { useSelector } from "react-redux";

export const RestaurantTab = ({ restaurantId, onClick, isActive }) => {
  const restaurant = useSelector(
    (state) => state.restaurant.entities[restaurantId]
  );
  return (
    <button onClick={onClick} disabled={isActive}>
      {restaurant.name}
    </button>
  );
};
