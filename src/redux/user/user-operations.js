import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "user/fetchAll",
  async (data, thunkAPI) => {
    try {
      const response = await fetch(
        "https://643915901b9a7dd5c95e9083.mockapi.io/users"
      );
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
