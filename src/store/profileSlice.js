import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../api/api";
import { parseJwt } from "../utils/decoder";
import { FLUSH, PURGE } from "redux-persist";

const ProfileSetter = (state, action) => {
  const { token } = action.payload;
  const profile = parseJwt(token);
  if (profile) {
    state.profile = profile;
    state.token = token;
  }
};

export const logginUser = createAsyncThunk("loginUser", async (payload) => {
  const { flag, navigate, ...user } = payload;
  const result = await loginUser(user, flag);
  if (parseJwt(result.token).role == "admin") {
    if (navigate)
      setTimeout(() => {
        navigate("/admin");
      }, 150);
  }
  return result;
});

export const SignUpUser = createAsyncThunk("SignUpUser", async (payload) => {
  const { flag, ...user } = payload;
  return await registerUser(user, flag);
});

const initialState = {
  profile: {},
  token: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PURGE],
      },
    }),
  extraReducers: (builder) => {
    builder
      .addCase(logginUser.fulfilled, ProfileSetter)
      .addCase(SignUpUser.fulfilled, ProfileSetter)
      .addCase(PURGE, () => {
        return initialState;
      });
  },
});
export const { logOut } = profileSlice.reducer;
export default profileSlice;
