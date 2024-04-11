import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurantId } from "./thunks/get-dishes-by-restaurant-id";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(
      getDishesByRestaurantId.fulfilled,
      (state, { payload: dishes }) => entityAdapter.upsertMany(state, dishes)
    ),
});
