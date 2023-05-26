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
  async ({ email, password, login }, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = await auth.currentUser;
      
      // await user.updateProfile(user:currentUser)
      await updateProfile(user, {
        displayName: login,
      });

      
      const { displayName, uid } = await auth.currentUser;
      console.log("🚀 ~ displayName:", displayName)

      return { email: user.email, uid, name: displayName };
    } catch (error) {
      console.log("🚀 ~ error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async ({ email, password }, thunkAPI) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("🚀 ~ credentials.user.uid:", credentials.user.uid);
      return credentials.user.uid;
    } catch (error) {
      console.log("🚀 ~ error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await auth.signOut();
    console.log("this is logOut operetion");
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUserProfile = createAsyncThunk(
  "auth/updateUser",
  async (userData, thunkAPI) => {
    const user = auth.currentUser;
    if (user) {
      console.log("🚀 ~ user:", user);
      try {
        await updateProfile(user, userData);
      } catch (error) {
        console.log("🚀 ~ error:", error);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
