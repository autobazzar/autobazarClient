import { configureStore } from "@reduxjs/toolkit";

import profileSlice from "./profileSlice";

const store = configureStore({
  reducer: profileSlice.reducer,
});

export default store;
