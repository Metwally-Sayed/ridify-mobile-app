import { configureStore } from "@reduxjs/toolkit";
import userLocationReducer from "./userLocationSlice";
import userTripReducer from "./userTripSlice";
export const store = configureStore({
  reducer: {
    userLocation: userLocationReducer,
    userTrip: userTripReducer,
    // Add other slices here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
