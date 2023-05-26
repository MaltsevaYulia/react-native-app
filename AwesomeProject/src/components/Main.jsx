import { NavigationContainer } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useRoute } from "../hooks/routing";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { db, auth } from "../firebase/config";
export const Main = () => {
    const [uid, setUid] = useState("");
    
   
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("🚀 ~ onAuthStateChanged ~ user:", user)
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUid(uid);
        // ...
      } else {
        // User is signed out
        // ...
        setUid("");
      }
    });
  const routing = useRoute(uid);
  return <NavigationContainer>{routing}</NavigationContainer>;
};
