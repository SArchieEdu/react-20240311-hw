import { useSelector } from "react-redux";
import { Dish } from "./component";
import { useCurrentUser } from "../../contexts/user";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { setAmount } from "../../redux/ui/cart";
import { selectDishAmount } from "../../redux/ui/cart/selectors";

export const DishContainer = ({ dishId, ...props }) => {
  const { user } = useCurrentUser();
  const dish = useSelector((state) => state.dish.entities[dishId]);
  const amount = useSelector((state) => selectDishAmount(state, dishId));
  const dispatch = useDispatch();

  const setAmountCallback = useCallback(
    (amount) => dispatch(setAmount({ amount, id: dishId })),
    [dishId, dispatch]
  );

  if (!dish) {
    return null;
  }

  return (
    <Dish
      {...props}
      dish={dish}
      withCart
      amount={amount}
      setAmount={setAmountCallback}
    />
  );
};
