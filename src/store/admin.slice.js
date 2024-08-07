import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../api/api";
// import { parseJwt } from "../utils/decoder";
import { FLUSH, PURGE } from "redux-persist";

// const ProfileSetter = (state, action) => {
//   const { token } = action.payload;
//   const profile = parseJwt(token);
//   if (profile) {
//     state.profile = profile;
//     state.token = token;
//   }
// };

export const logginUser = createAsyncThunk("loginUser", async (payload) => {
  const { flag, ...user } = payload;
  return await loginUser(user, flag);
});

export const SignUpUser = createAsyncThunk("SignUpUser", async (payload) => {
  const { flag, ...user } = payload;
  return await registerUser(user, flag);
});

const initialState = {
  adminProfile: {},
  token: null,

};

const adminSlice = createSlice({
  name: "admin",
  initialState,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PURGE],
      },
    }),
  extraReducers: (builder) => {
    builder
      .addCase(PURGE, () => {
        return initialState;
      });
  },
});
// export const { logOut } = profileSlice.reducer;
export default adminSlice;
