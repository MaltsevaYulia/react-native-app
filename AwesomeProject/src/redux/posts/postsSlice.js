import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { getPosts } from "./postsOperations";

const initialState = {
  posts:[]
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => state)
      .addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => state);
  },
});

export const postsReducer = () => postsSlice.reducer;
