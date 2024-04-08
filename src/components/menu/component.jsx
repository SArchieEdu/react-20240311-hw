import { Dish } from "../dish/component";

import styles from "./styles.module.css";

/* eslint-disable react/jsx-key */
export const Menu = ({ dishIds }) => {
  return (
    <div className={styles.root}>
      {dishIds.map((id) => (
        <Dish dishId={id} className={styles.dish} />
      ))}
    </div>
  );
};
