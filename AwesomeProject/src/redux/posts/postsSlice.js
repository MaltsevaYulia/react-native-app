import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { getPosts, getComments } from "./postsOperations";

const initialState = {
  posts: [],
  comments:[]
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
      .addCase(getPosts.rejected, (state) => state)
      .addCase(getComments.pending, (state) => state)
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state) => state);
  },
});

export const postsReducer = () => postsSlice.reducer;
