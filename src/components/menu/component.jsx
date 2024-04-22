import { DishContainer } from "../dish/container";

import styles from "./styles.module.css";

export const Menu = ({ dishIds }) => {
  return (
    <div className={styles.root}>
      {dishIds.map((id) => (
        <DishContainer key={id} dishId={id} className={styles.dish} />
      ))}
    </div>
  );
};
