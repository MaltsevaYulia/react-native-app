import { createSlice, combineReducers } from "@reduxjs/toolkit";
import {
  getPosts,
  getComments,
  addLikes,
  addPost,
  addComment,
} from "./postsOperations";

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
      .addCase(getComments.rejected, (state) => state)
      .addCase(addPost.pending, (state) => state)
      .addCase(addPost.fulfilled, (state, action) => {
        console.log("action.payload in addPost.fulfilled", action.payload);
        state.posts.push(action.payload);
      })
      .addCase(addPost.rejected, (state) => state)
      .addCase(addLikes.pending, (state) => state)
      .addCase(addLikes.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (item) => item.id === action.payload.id
        );
        state.posts[index].likes = action.payload.likes;
      })
      .addCase(addLikes.rejected, (state) => state)
      .addCase(addComment.pending, (state) => state)
      .addCase(addComment.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (item) => item.id === action.payload.id
        );
        state.posts[index].comments.push(action.payload.newComment) ;
      })
      .addCase(addComment.rejected, (state) => state);;
  },
});

export const postsReducer = () => postsSlice.reducer;
