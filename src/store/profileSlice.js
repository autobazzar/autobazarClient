import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../api/api";
import { parseJwt } from "../utils/decoder";
import { FLUSH, PURGE } from "redux-persist";

const ProfileSetter = (state, action) => {
  console.error(action);
  const { token } = action.payload;
  const profile = parseJwt(token);
  console.error(profile);
  if (profile) {
    console.error(state);
    state.profile = profile;
    state.token = token;
  }
};

export const logginUser = createAsyncThunk("loginUser", async (payload) => {
  const { flag, ...user } = payload;
  return await loginUser(user, flag);
});

export const SignUpUser = createAsyncThunk("SignUpUser", async (payload) => {
  const { flag, ...user } = payload;
  return await registerUser(user, flag);
});

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
    token: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(logginUser.fulfilled, ProfileSetter)
      .addCase(SignUpUser.fulfilled, ProfileSetter)
      .addCase(FLUSH, (state, action) => {
        console.error(state);
      });
  },
});

export default profileSlice;
