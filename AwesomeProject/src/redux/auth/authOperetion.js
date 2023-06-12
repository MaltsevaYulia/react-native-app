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
      
      if (credentials.user) {
         const { uid, email, displayName } = credentials.user;
      return { uid, email, name: displayName };
      
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


export const authStateChangeUser = createAsyncThunk(
  "auth/authStateChange",
  async (_, thunkAPI) => {
    const dispatch = useDispatch();
    try {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          // console.log("🚀 ~ onAuthStateChanged ~ user:", user)
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const { uid, email, displayName } = user;
          return { uid, email, name: displayName };
          // ...
        } else {
          // User is signed out
          // ...
          console.log(
            "Это authStateChangeUser вызываю dispatch(logOut())"
          );
          dispatch(logOut())
          return null
        }
      });
    } catch (error) {
      console.log("🚀 ~ error:", error)
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)