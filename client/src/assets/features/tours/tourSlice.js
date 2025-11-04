import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tours: [],
  selectedTour: {},
  bookings: [],
};

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    addTours(state, action) {
      state.tours = action.payload;
    },
    setTour(state, action) {
      state.selectedTour = action.payload;
    },
    setBookings(state, action) {
      state.bookings = action.payload;
    },
  },
});

export default tourSlice.reducer;

export const { addTours, setTour, setBookings } = tourSlice.actions;

export const getTours = (state) => state.tour.tours;
export const getSelectedTour = (state) => state.tour.selectedTour;
export const getBooking = (state) => state.tour.bookings;
