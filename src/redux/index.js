import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";
import { reviewSlice } from "./entities/reveiw";
import { dishSlice } from "./entities/dish";
import { userSlice } from "./entities/user";

export const store = configureStore({
  reducer: combineSlices(restaurantSlice, reviewSlice, dishSlice, userSlice),
});
