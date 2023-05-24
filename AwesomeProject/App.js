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

import { PersistGate } from "redux-persist/integration/react";
import persistor from "./src/redux/store";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <NavigationContainer>
          <MainStack.Navigator>
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
}
