import { createSlice } from "@reduxjs/toolkit";

export interface UserLocationState {
  latitude: number;
  longitude: number;
  address: string;
}

const initialUserLocationState: UserLocationState = {
  latitude: 0,
  longitude: 0,
  address: "",
};

const userLocationSlice = createSlice({
  name: "userLocation",
  initialState: initialUserLocationState,
  reducers: {
    setUserLocation: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.address = action.payload.address;
    },
    clearUserLocation: (state) => {
      state.latitude = 0;
      state.longitude = 0;
      state.address = "";
    },
  },
});

export const { setUserLocation, clearUserLocation } = userLocationSlice.actions;
export default userLocationSlice.reducer;
