import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultPostsScreen } from "./nestedScreens/DefaultPostsScreen";
import CommentsScreen from "./nestedScreens/CommentsScreen";
import MapScreen from "./nestedScreens/MapScreen";

const NestedScreens=createStackNavigator()

export const PostsScreen = ({ route, navigation }) => {
  return (
    <NestedScreens.Navigator>
      <NestedScreens.Screen
        name="DefaultPostsScreen"
        component={DefaultPostsScreen}
        options={{ headerShown: false }}
      />
      <NestedScreens.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{ headerShown: false }}
      />
      <NestedScreens.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerShown: false }}
      />
    </NestedScreens.Navigator>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  userWrapp: {
    flexDirection: "row",
    gap: 8,
  },
  userInfo: {
    // alignItems: 'center',
    justifyContent: "center",
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  postContainer: {
    // backgroundColor: "#F6F6F6",
    // width: 343,
    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    // justifyContent: "center",
    // alignItems: "center",
    marginBottom: 8,
  },
  picture: {
    width: "100%",
    height: "100%",
    overflow: "visible",
  },
  postName: {
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  location: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#212121",
  },
  btn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
});
