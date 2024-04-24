import { memo } from "react";
import { CounterWithAuthorizeCheck } from "../counter/component";

import styles from "./styles.module.css";
import classNames from "classnames";

export const Dish = ({
  dish,
  className,
  withPaddings,
  withCart,
  amount,
  setAmount,
}) => {
  return (
    <div
      className={classNames(styles.root, className, {
        [styles.withPaddings]: withPaddings,
      })}
    >
      <div>{dish.name}</div>
      {!!withCart && (
        <CounterWithAuthorizeCheck value={amount} onChange={setAmount} />
      )}
    </div>
  );
};

export const DishWithMemo = memo(Dish);
