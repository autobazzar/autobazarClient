import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../api/api";
import { parseJwt } from "../utils/decoder";

const ProfileSetter = (state, action) => {
  const { token } = action.payload;
  state.profile = parseJwt(token);
};

export const logginUser = createAsyncThunk(
  "loginUser",
  async (payload, flag) => {
    return loginUser(payload, flag);
  }
);

export const SignUpUser = createAsyncThunk(
  "SignUpUser",
  async (payload, flag) => {
    return registerUser(payload, flag);
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(logginUser.fulfilled, ProfileSetter)
      .addCase(SignUpUser.fulfilled, ProfileSetter);
  },
});

export default profileSlice;
