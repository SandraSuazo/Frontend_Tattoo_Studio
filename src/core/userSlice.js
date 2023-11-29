import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
    token: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    cleanUser: (state) => {
      state.user = "";
      state.token = "";
    },
  },
});

export const { setUser, setToken, cleanUser } = userSlice.actions;
export const userData = (state) => state.user;
export default userSlice.reducer;
