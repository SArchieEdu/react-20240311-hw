import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "./constants";

export const requestSlice = createSlice({
  name: "request",
  initialState: {},
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, { meta }) => {
          state[meta.requestId] = {
            status: REQUEST_STATUSES.pending,
          };
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = {
            status: REQUEST_STATUSES.fulfilled,
          };
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { meta, error }) => {
          state[meta.requestId] = {
            status: REQUEST_STATUSES.rejected,
            error,
          };
        }
      ),
});
