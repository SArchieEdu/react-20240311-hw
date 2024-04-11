import { Restaurants } from "./component";

import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { RestaurantsSkeleton } from "./skeleton";
import { useRequest } from "../../hooks/use-request";
import { REQUEST_STATUSES } from "../../redux/ui/request/constants";
import { useLazyRequest } from "../../hooks/use-lazy-request";

const reloadRestaurantParams = { forceReload: true };

export const RestaurantsContainer = () => {
  const requestStatus = useRequest(getRestaurants);
  const [refetchStatus, refetchRestaurants] = useLazyRequest(
    getRestaurants,
    reloadRestaurantParams
  );

  if (
    requestStatus === REQUEST_STATUSES.pending ||
    refetchStatus === REQUEST_STATUSES.pending
  ) {
    return <RestaurantsSkeleton />;
  }

  return <Restaurants onRefresh={refetchRestaurants} />;
};
