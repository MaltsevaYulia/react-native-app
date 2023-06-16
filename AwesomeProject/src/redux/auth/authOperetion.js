import { async } from "@firebase/util";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase/config";

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password, login, photo }, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password, photo);

      const user = await auth.currentUser;
      console.log("🚀 ~ in register operetion user:", user);

      // await user.updateProfile(user:currentUser)
      await updateProfile(user, {
        displayName: login,
        photoURL: photo,
      });

      const { displayName, uid, photoURL } = await auth.currentUser;

      return { email: user.email, uid, name: displayName, photoURL };
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

      if (credentials.user) {
        const { uid, email, displayName, photoURL } = credentials.user;
        return { uid, email, name: displayName, photoURL };
      }
    } catch (error) {
      console.log("🚀 ~ error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await auth.signOut();
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUserPhoto = createAsyncThunk(
  "auth/updateUserPhoto",
  async ({uri}, thunkAPI) => {
    const user = auth.currentUser;
    if (user) {
      try {
        await updateProfile(user, {
          photoURL: uri,
        });
        const { displayName, uid, photoURL } = await auth.currentUser;

        return { email: user.email, uid, name: displayName, photoURL };
      } catch (error) {
        console.log("🚀 ~ error:", error);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const authStateChangeUser = createAsyncThunk(
  "auth/authStateChange",
  async (_, thunkAPI) => {
    try {
      const user = await new Promise((resolve, reject) => {
        onAuthStateChanged(
          auth,
          (user) => {
            if (user) {
              console.log("🚀 ~ onAuthStateChanged ~ user:", user);
              const { uid, email, displayName, photoURL } = user;
              resolve({ uid, email, displayName, photoURL });
            } else {
              resolve(null);
            }
          },
          reject
        );
      });

      return user;
      // await onAuthStateChanged(auth, (user) => {
      //     if (user) {
      //       console.log("🚀 ~ onAuthStateChanged ~ user:", user)
      //       // User is signed in, see docs for a list of available properties
      //       // https://firebase.google.com/docs/reference/js/auth.user
      //       const { uid, email, displayName, photoURL } = user;
      //       return { uid, email, name: displayName, photoURL };
      //     } else {
      //       return null
      //     }
      // });
    } catch (error) {
      console.log("🚀 ~ error.message:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
