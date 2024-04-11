import { MenuContainer } from "../menu/container";
import { ReviewsContainer } from "../reviews/container";

/* eslint-disable react/jsx-key */
export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <div>
        <h3>Menu</h3>
        <MenuContainer restaurantId={restaurant.id} />
      </div>
      <div>
        <h3>Reviews</h3>
        <ReviewsContainer restaurantId={restaurant.id} />
      </div>
    </div>
  );
};
