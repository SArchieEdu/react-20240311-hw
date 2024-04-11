import { DishContainer } from "../dish/container";

import styles from "./styles.module.css";

/* eslint-disable react/jsx-key */
export const Menu = ({ dishIds }) => {
  return (
    <div className={styles.root}>
      {dishIds.map((id) => (
        <DishContainer dishId={id} className={styles.dish} />
      ))}
    </div>
  );
};
