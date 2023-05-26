import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { register, logIn, logOut, updateUserProfile } from "./authOperetion";

const initialState = {
  user: { uid: null, email: null },
  nickname: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // reducers: {
  //   // updateUserProfile: (state, { payload }) => ({
  //   //   ...state,
  //   //   userId: payload.userId,
  //   // }),
  // },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => state)
      .addCase(register.fulfilled, (state, action) => {
        console.log("action.payload in register.fulfilled", action.payload);
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state) => state)
      .addCase(logIn.pending, (state) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        console.log("action.payload logIn.fulfilled", action.payload);
      })
      .addCase(logIn.rejected, (state) => state)
      .addCase(logOut.pending, (state) => state)
      .addCase(logOut.fulfilled, (state, action) => {
        console.log("action.payload logOut.fulfilled", action.payload);
      })
      .addCase(logOut.rejected, (state) => state);
  },
});

export const rootReduser = combineReducers({
  [authSlice.name]: authSlice.reducer,
});
