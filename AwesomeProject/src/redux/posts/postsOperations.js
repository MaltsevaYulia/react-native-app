import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsFromFirestore } from "../../helpers/getDataFromFirestore/getPostsFromFirestore";
import { db } from "../../firebase/config";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  addDoc,
  arrayUnion,
} from "firebase/firestore";
import { getCommentsFromFirestore } from "../../helpers/getDataFromFirestore/getCommentsFromFirestore";

export const getPosts = createAsyncThunk(
  "posts/getAll",
  async (_, thunkAPI) => {
    try {
      // const snapShot = await getDocs(collection(db, "posts"));
      // const postsData = snapShot.docs.map(async (doc) => {
      //   const post = { ...doc.data(), id: doc.id };
      //   const commentsSnapshot = await getDocs(
      //     collection(db, `posts/${doc.id}/comments`)
      //   );
      //   const commentsData = commentsSnapshot.docs.map((commentDoc) =>
      //     commentDoc.data()
      //   );
      //   post.comments = commentsData
      //   return post;
      // });
      // const posts = await Promise.all(postsData);
      // return posts;
      const snapShot = await getDocs(collection(db, "posts"));
      const postsData = snapShot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
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

export const addPost = createAsyncThunk(
  "posts/addPost",
  async ({ photo, name, region, likes, location, comments }, thunkAPI) => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        photo,
        name,
        region,
        likes,
        location,
        comments,
      });
      console.log("Document written with ID: ", docRef.id);
      return {
        photo,
        name,
        region,
        likes,
        location,
        comments,
      };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addLikes = createAsyncThunk(
  "posts/addLikes",
  async ({ id, newLikes }, thunkAPI) => {
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
    try {
      const commentsRef = await doc(db, "posts", id);
      await updateDoc(commentsRef, {
        comments: arrayUnion(newComment),
      });
      // const commentsRef = await collection(db, "posts", id, "comments");
      // await addDoc(commentsRef, { ...newComment });
      return { id, newComment };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
