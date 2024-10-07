import { configureStore } from "@reduxjs/toolkit";
import weitherApiSliceReducer from "../features/weither/weitherSlice";
export const store = configureStore({
  reducer: {
    weather: weitherApiSliceReducer,
  },
});
