import { async } from "@firebase/util";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";

// export const register =async ({email,password}) => {
//     try {
//         const user = await createUserWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );
//     } catch (error) {
//         throw error;
//         console.log("🚀 ~ register ~ error:", error)

//     }
// }

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password }, thunkAPI) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("🚀 ~ error:", error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async ({email, password},thunkAPI) => {
    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password)
      console.log("🚀 ~ credentials.user.uid:", credentials.user.uid);
      return credentials.user.uid;
    } catch (error) {
      console.log("🚀 ~ error:", error)
      return thunkAPI.rejectWithValue(error.message)
      
    }
      
  }
)
