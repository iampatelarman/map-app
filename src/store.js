// REDUX STORE

import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "./features/regionSlice";

export const store = configureStore({
  reducer: {
    region: regionReducer,
  },
});
