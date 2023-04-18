import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./user-operations";

const handlePending = (state) => {
  state.error = null;
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const state = {
  userItems: [],
  follow: {},
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: state,
  reducers: {
    updateFollow: (state, { payload }) => {
      state.follow[payload] = !state.follow[payload];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, handlePending)
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userItems = payload;
      })
      .addCase(getUsers.rejected, handleRejected),
});

export const { updateFollow } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
