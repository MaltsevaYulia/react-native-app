import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { useRoute } from "./src/hooks/routing";
import { LoginScreen } from "./src/Screens/LoginScreen";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { HomeScreen } from "./src/Screens/HomeScreen";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { db, auth } from "./src/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { PersistGate } from "redux-persist/integration/react";
import persistor from "./src/redux/store";

import { Main } from "./src/components/Main";

const MainStack = createStackNavigator();

export default function App() {
  const [uid, setUid] = useState("");
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

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
  // db.auth().onAuthStateChanged((user) => {
  //   console.log("🚀 ~ db.auth ~ user:", user)

  //   return setUser(user)
  // });

  // const routing = useRoute(uid);

  return (
    <Provider store={store}>
      <Main />
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {/* <NavigationContainer>{routing}</NavigationContainer> */}
      {/* </PersistGate> */}
    </Provider>
  );
}
