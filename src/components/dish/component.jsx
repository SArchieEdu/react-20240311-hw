import { useState } from "react";
import { Counter } from "../counter/component";
import { useCurrentUser } from "../../contexts/user";

import styles from "./styles.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";

export const Dish = ({ dishId, className, withPaddings }) => {
  const dish = useSelector((state) => state.dish.entities[dishId]);
  const [amount, setAmount] = useState(0);
  const { user } = useCurrentUser();

  return (
    <div
      className={classNames(styles.root, className, {
        [styles.withPaddings]: withPaddings,
      })}
    >
      <div>{dish.name}</div>
      {!!user && <Counter value={amount} onChange={setAmount} />}
    </div>
  );
};
