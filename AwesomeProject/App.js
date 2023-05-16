import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { useRoute } from "./src/hooks/routing";


export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const routing = useRoute(true);
  return (
    <NavigationContainer>{routing}</NavigationContainer>
  );

}

