import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "../hooks/routing";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { db, auth } from "../firebase/config";
import { selectIsLoggedIn } from "../redux/selectors";
import { authStateChangeUser } from "../redux/auth/authOperetion";
import { UserNav } from "./UserNav";
import { AuthNav } from "./AuthNav";


export const Main = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // console.log("🚀 ~ onAuthStateChanged ~ user:", user)
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/auth.user
  //     const uid = user.uid;
  //     setUid(uid);
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //     setUid("");
  //   }
  // });

  return (
    <NavigationContainer>
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </NavigationContainer>
  );
  
};


