import { UserContainer } from "../user/container";

export const Review = ({ review }) => {
  return (
    <div>
      {review.text}
      <UserContainer userId={review.userId} />
    </div>
  );
};
