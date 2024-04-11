import { Counter } from "../counter/component";

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
      {!!withCart && <Counter value={amount} onChange={setAmount} />}
    </div>
  );
};
