import { useSelector } from "react-redux";
import { selectCartDishIds } from "../../redux/ui/cart/selectors";
import { Cart } from "./component";

export const CartContainer = () => {
  const dishIds = useSelector(selectCartDishIds);
  return <Cart dishIds={dishIds} />;
};
