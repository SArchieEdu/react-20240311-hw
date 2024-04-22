import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";
import { useSelector } from "react-redux";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors";
import { Menu } from "./component";
import { useRequest } from "../../hooks/use-request";
import { REQUEST_STATUSES } from "../../redux/ui/request/constants";
import { useParams } from "react-router-dom";

export const MenuContainer = () => {
  const { restaurantId } = useParams();
  const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);

  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  if (requestStatus === REQUEST_STATUSES.pending) {
    return <div>Loading</div>;
  }

  return <Menu dishIds={dishIds} />;
};
