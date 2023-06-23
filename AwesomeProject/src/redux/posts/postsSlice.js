import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getPosts,
  getComments,
  addLikes,
  addPost,
  addComment,
} from "./postsOperations";

const initialState = {
  posts: [],
};
const postsActions = [getPosts, getComments, addLikes, addPost, addComment];
const getActions = (type) => postsActions.map((action) => action[type]);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(addLikes.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (item) => item.id === action.payload.id
        );
        state.posts[index].likes = action.payload.likes;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (item) => item.id === action.payload.id
        );
        state.posts[index].comments.push(action.payload.newComment) ;
      })
      .addMatcher(
        isAnyOf(...getActions('pending')),(state) => state
      )
      .addMatcher(
        isAnyOf(...getActions('rejected')),(state) => state
      )
  },
});

export const postsReducer = () => postsSlice.reducer;
