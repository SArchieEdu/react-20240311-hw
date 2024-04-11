import { getReviewsByRestaurantId } from "../../redux/entities/reveiw/thunks/get-reviews-by-restaurant-id";
import { useSelector } from "react-redux";
import { selectRestaurantReviewIds } from "../../redux/entities/restaurant/selectors";
import { Reviews } from "./component";
import { getUsers } from "../../redux/entities/user/thunks/get-users";
import { useRequest } from "../../hooks/use-request";
import { REQUEST_STATUSES } from "../../redux/ui/request/constants";

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewRequestStatus = useRequest(
    getReviewsByRestaurantId,
    restaurantId
  );
  const userRequestStatus = useRequest(getUsers);

  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );

  if (
    reviewRequestStatus === REQUEST_STATUSES.pending ||
    userRequestStatus === REQUEST_STATUSES.pending
  ) {
    return <div>Loading</div>;
  }

  return <Reviews reviewIds={reviewIds} />;
};
