import { Restaurants } from "./component";

import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { RestaurantsSkeleton } from "./skeleton";
import { useRequest } from "../../hooks/use-request";
import { REQUEST_STATUSES } from "../../redux/ui/request/constants";

export const RestaurantsContainer = () => {
  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === REQUEST_STATUSES.pending) {
    return <RestaurantsSkeleton />;
  }

  return <Restaurants />;
};
