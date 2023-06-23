import { createSlice, combineReducers, isAnyOf } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  logOut,
  updateUserPhoto,
  authStateChangeUser,
} from "./authOperetion";

const initialState = {
  user: null,
  isLoggedIn: false,
};

const authActions = [
  register,
  logIn,
  logOut,
  updateUserPhoto,
  authStateChangeUser,
];
const getActions = (type) => authActions.map((action) => action[type]);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        return (state = initialState);
      })
      .addCase(authStateChangeUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(updateUserPhoto.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addMatcher(isAnyOf(...getActions("pending")), (state) => state)
      .addMatcher(isAnyOf(...getActions("rejected")), (state) => state);
  },
});

export const rootReduser = combineReducers({
  [authSlice.name]: authSlice.reducer,
});
