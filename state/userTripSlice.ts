import { createSlice } from "@reduxjs/toolkit";

export interface UserTripState {
  userLatitude: number;
  userLongitude: number;
  userAddress: string;
  destinationLatitude: number;
  destinationLongitude: number;
  destinationAddress: string;
  driverId: number;
}

const initialUserTripState: UserTripState = {
  userLatitude: 0,
  userLongitude: 0,
  userAddress: "",
  destinationLatitude: 0,
  destinationLongitude: 0,
  destinationAddress: "",
  driverId: 0,
};

const userTripSlice = createSlice({
  name: "userTrip",
  initialState: initialUserTripState,
  reducers: {
    setUserPickupLocation: (state, action) => {
      state.userLatitude = action.payload.userLatitude;
      state.userLongitude = action.payload.userLongitude;
      state.userAddress = action.payload.userAddress;
    },
    setUserTrip: (state, action) => {
      state.destinationLatitude = action.payload.destinationLatitude;
      state.destinationLongitude = action.payload.destinationLongitude;
      state.destinationAddress = action.payload.destinationAddress;
    },
    clearUserPickupLocation: (state) => {
      state.userLatitude = 0;
      state.userLongitude = 0;
      state.userAddress = "";
    },
    clearUserTrip: (state) => {
      state.destinationLatitude = 0;
      state.destinationLongitude = 0;
      state.destinationAddress = "";
    },
    setDriverId: (state, action) => {
      state.driverId = action.payload.driverId;
    },
  },
});

export const {
  setUserPickupLocation,
  setUserTrip,
  clearUserTrip,
  clearUserPickupLocation,
  setDriverId,
} = userTripSlice.actions;
export default userTripSlice.reducer;
