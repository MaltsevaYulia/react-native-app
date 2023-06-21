import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsFromFirestore } from "../../helpers/getDataFromFirestore/getPostsFromFirestore";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { getCommentsFromFirestore } from "../../helpers/getDataFromFirestore/getCommentsFromFirestore";

export const getPosts = createAsyncThunk(
  "posts/getAll",
  async (_, thunkAPI) => {
    try {
      const snapShot = await getDocs(collection(db, "posts"));
      const postsData = snapShot.docs.map(async (doc) => {
        const post = { ...doc.data(), id: doc.id };

        const commentsSnapshot = await getDocs(
          collection(db, `posts/${doc.id}/comments`)
        );
        const commentsData = commentsSnapshot.docs.map((commentDoc) =>
          commentDoc.data()
        );
        post.comments = commentsData;
        return post;
      });
      const posts = await Promise.all(postsData);

      console.log("🚀 ~ postsData ~ posts:", posts);
      return posts;
      //   console.log("🚀 ~ postsData ~ postsData:", postsData);
      //   return postsData;
    } catch (error) {
      console.log(error);
     return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getComments = createAsyncThunk(
  "posts/getComments",
  async (id, thunkAPI) => {
    try {
    return await  getCommentsFromFirestore(id);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addPost = createAsyncThunk();
//   "posts/addPost",
//   async (data, thunkAPI) => {
//     try {
//       const response = await axios.post("/contacts", data);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
