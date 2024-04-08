import { useSelector } from "react-redux";
import { User } from "../user/component";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => state.review.entities[reviewId]);

  return (
    <div>
      {review.text}
      <User userId={review.userId} />
    </div>
  );
};
