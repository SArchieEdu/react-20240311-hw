import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    incrementDish: (state, { payload: id }) => {
      const dish = state[id] || 0;

      state[id] = dish + 1;
    },
    decrementDish: (state, { payload: id }) => {
      state[id] = (state[id] || 0) - 1;

      if (state[id] <= 0) {
        delete state[id];
      }
    },
    setAmount: (state, { payload: { id, amount } }) => {
      state[id] = amount;

      if (state[id] <= 0) {
        delete state[id];
      }
    },
  },
});

export const { incrementDish, decrementDish, setAmount } = cartSlice.actions;
