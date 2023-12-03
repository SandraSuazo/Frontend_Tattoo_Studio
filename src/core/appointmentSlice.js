import { createSlice } from "@reduxjs/toolkit";

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    appointments: [],
  },
  reducers: {
    setAppointments: (state, action) => {
      state.appointments = action.payload;
    },
  },
});

export const { setAppointments } = appointmentSlice.actions;
export const appointmentData = (state) => state.appointment;
export default appointmentSlice.reducer;