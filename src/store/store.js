import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import profileSlice from "./profileSlice";

const persistConfig = {
  key: "root",
  storage,
};

// const rootReducers = combineReducers({ profilereducer: profileSlice.reducer });
const persistedReducer = persistReducer(persistConfig, profileSlice.reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
