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
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { authStateChangeUser } from "../redux/auth/authOperetion";
import { UserNav } from "./UserNav";
import { AuthNav } from "./AuthNav";
// import { connect } from "react-redux";


export const Main = () => {
  // const [uid, setUid] = useState("");
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log("🚀 ~ Main ~ isLoggedIn:", isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("🚀 ~ Main ~ isLoggedIn in useEffect:", isLoggedIn);
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
  // const routing = useRoute(isLoggedIn);
  // return <NavigationContainer>{routing}</NavigationContainer>;
};


