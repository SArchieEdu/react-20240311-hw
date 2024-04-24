import { DishContainer } from "../dish/container";

export const Cart = ({ dishIds }) => {
  return (
    <div>
      {dishIds?.map((dishId) => (
        <DishContainer key={dishId} dishId={dishId} />
      ))}
    </div>
  );
};
