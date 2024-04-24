import { createSelector } from "@reduxjs/toolkit";

export const selectCartModule = (state) => state.cart;

export const selectDishAmount = (state, dishId) =>
  selectCartModule(state)[dishId] || 0;

// export const selectCartDishIds = (state) =>
//   Object.keys(selectCartModule(state));

export const selectCartDishIds = createSelector([selectCartModule], (cart) => {
  return Object.keys(cart);
});
