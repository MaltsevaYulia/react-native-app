import { createSlice, combineReducers } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: { userId: null, nickname: null },
  reducers: {
    // updateUserProfile: (state, { payload }) => ({
    //   ...state,
    //   userId: payload.userId,
    // }),
  },
});

export const rootReduser = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

