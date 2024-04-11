import { ReviewContainer } from "../review/container";

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviewIds }) => {
  return (
    <ul>
      {reviewIds.map((id) => (
        <li>
          <ReviewContainer reviewId={id} />
        </li>
      ))}
    </ul>
  );
};
