import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsFromFirestore } from "../../helpers/getDataFromFirestore/getPostsFromFirestore";
import { db } from "../../firebase/config";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { getCommentsFromFirestore } from "../../helpers/getDataFromFirestore/getCommentsFromFirestore";

export const getPosts = createAsyncThunk(
  "posts/getAll",
  async (_, thunkAPI) => {
    try {
      const snapShot = await getDocs(collection(db, "posts"));
      const postsData = snapShot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
        // const post = { ...doc.data(), id: doc.id }
        // const commentsSnapshot = await getDocs(
        //   collection(db, `posts/${doc.id}/comments`)
        // );
        // const commentsData = commentsSnapshot.docs.map((commentDoc) =>
        //   commentDoc.data()
        // );
        // post.comments = commentsData;
        // return post;
      });
      // const posts = await Promise.all(postsData);

      // console.log("🚀 ~ postsData ~ posts:", posts);
      // return posts;
        console.log("🚀 ~ getPosts ~ postsData:", postsData);
        return postsData;
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
      return await getCommentsFromFirestore(id);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const addPost = createAsyncThunk("posts/addPost", async ({photo,
     name,
     region,
     likes,
     location}, thunkAPI) => {
  
  try {
   const docRef = await addDoc(collection(db, "posts"), {
     photo,
     name,
     region,
     likes,
     location
   });
    console.log("Document written with ID: ", docRef.id);
    return {
      photo,
      name,
      region,
      likes,
      location
    };
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addLikes = createAsyncThunk(
  "posts/addLikes",
  async ({ id, newLikes }, thunkAPI) => {
    console.log("🚀 ~ newLikes:", newLikes);
    console.log("🚀 ~ id:", id);
    try {
      const likesRef = await doc(db, "posts", id);
      await updateDoc(likesRef, { likes: newLikes });
      return { id, likes: newLikes };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ id, newComment }, thunkAPI) => {
    console.log("🚀 ~ newComment:", newComment);
    console.log("🚀 ~ id:", id);
    try {
      const commentRef = await doc(db, "posts", id);
      await updateDoc(commentRef, { comments: comments.push(newComment) });
      return { id, newComment };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
