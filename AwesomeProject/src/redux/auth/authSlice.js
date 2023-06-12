import { createSlice, combineReducers } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  logOut,
  updateUserProfile,
  authStateChangeUser,
} from "./authOperetion";

const initialState = {
  user: null,
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
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state) => state)
      .addCase(logIn.pending, (state) => state)
      .addCase(logIn.fulfilled, (state, action) => {
           state.user = action.payload;
           state.isLoggedIn = true;
         
      })
      .addCase(logIn.rejected, (state) =>  state
      )
      .addCase(logOut.pending, (state) => state)
      .addCase(logOut.fulfilled, (state, action) => {
        return state = initialState;
      })
      .addCase(logOut.rejected, (state) => state)
      .addCase(authStateChangeUser.pending, (state) => state)
      .addCase(authStateChangeUser.fulfilled, (state, action) => {
        console.log(
          "action.payload authStateChangeUser.fulfilled",
          action.payload
        );

        if (!action.payload) {
          console.log("authStateChangeUser юзер не пришел");
          state.isLoggedIn = false;
        } else {
          state.user = action.payload;
          state.isLoggedIn = true;
        }
      })
      .addCase(authStateChangeUser.rejected, (state) => state);
  },
});

export const rootReduser = combineReducers({
  [authSlice.name]: authSlice.reducer,
});
