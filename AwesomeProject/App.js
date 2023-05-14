import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LoginScreen } from "./src/Screens/LoginScreen";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { PostsScreen } from "./src/Screens/PostsScreen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/Screens/Home";

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
    <>
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
          <MainStack.Screen name='Home' component={Home} options={{headerShown:false}} />
        </MainStack.Navigator>
      </NavigationContainer>

      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            style={styles.bg}
            source={require("./src/assets/images/photo-bg.jpg")}
          >
            {/* <RegistrationScreen /> */}
            {/* <LoginScreen /> */}
            {/* <PostsScreen/> */}
            {/* <StatusBar style="auto" />
          </ImageBackground> */}
        {/* </View> */}
      {/* </TouchableWithoutFeedback> */} 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "center",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
