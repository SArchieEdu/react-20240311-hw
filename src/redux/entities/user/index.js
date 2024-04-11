import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunks/get-users";

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "user",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload: users }) =>
      entityAdapter.setAll(state, users)
    ),
});
