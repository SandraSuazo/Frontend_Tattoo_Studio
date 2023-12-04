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
    cleanAppointments: (state) => {
      state.appointments = [];
    },
  },
});

export const { setAppointments, cleanAppointments } = appointmentSlice.actions;
export const appointmentData = (state) => state.appointment;
export default appointmentSlice.reducer;
