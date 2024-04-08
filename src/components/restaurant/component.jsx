import { useSelector } from "react-redux";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

/* eslint-disable react/jsx-key */
export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector(
    (state) => state.restaurant.entities[restaurantId]
  );
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <div>
        <h3>Menu</h3>
        <Menu dishIds={restaurant.menu} />
      </div>
      <div>
        <h3>Reviews</h3>
        <Reviews reviewIds={restaurant.reviews} />
      </div>
    </div>
  );
};
