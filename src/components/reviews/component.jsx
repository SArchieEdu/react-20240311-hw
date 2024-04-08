import { Review } from "../review/component";

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviewIds }) => {
  return (
    <ul>
      {reviewIds.map((id) => (
        <li>
          <Review reviewId={id} />
        </li>
      ))}
    </ul>
  );
};
