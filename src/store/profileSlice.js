import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../api/api";

export const logginUser = createAsyncThunk(
  "loginUser",
  async (payload, flag) => {
    return loginUser(payload, flag);
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(logginUser.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});

export default profileSlice;
