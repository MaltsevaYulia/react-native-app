import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, StyleSheet, View, MyButton } from "react-native";
import { DefaultPostsScreen } from "./nestedScreens/DefaultPostsScreen";
import CommentsScreen from "./nestedScreens/CommentsScreen";
import MapScreen from "./nestedScreens/MapScreen";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/authOperetion";

const NestedScreens=createStackNavigator()

export const PostsScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();

  return (
    <NestedScreens.Navigator>
      <NestedScreens.Screen
        name="DefaultPostsScreen"
        component={DefaultPostsScreen}
        // options={{ headerShown: false }}
        options={() => ({
          title: "Публикации",
          headerTitleStyle: styles.headerTitle,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                dispatch(logOut());
              }}
              style={{ paddingRight: 16 }}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        })}
      />
      <NestedScreens.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        // options={{ headerShown: false }}
        options={({ navigation }) => ({
          tabBarStyle: { display: "none" },
          title: "Комментарии",
          headerTitleStyle: styles.headerTitle,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DefaultPostsScreen");
              }}
              style={{ paddingLeft: 16 }}
            >
              <Feather name="arrow-left" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        })}
      />
      <NestedScreens.Screen
        name="MapScreen"
        component={MapScreen}
        // options={{ headerShown: false }}
        options={({ navigation }) => ({
          tabBarStyle: { display: "none" },
          title: "Карта",
          headerTitleStyle: styles.headerTitle,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DefaultPostsScreen");
              }}
              style={{ paddingLeft: 16 }}
            >
              <Feather name="arrow-left" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        })}
      />
    </NestedScreens.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 22,
    color: "#212121",
    paddingVertical: 11,
  },
  // footer: {
  //   // height: 83,
  //   flex: 1,
  //   // paddingHorizontal: 82,
  //   paddingTop: 9,
  //   backgroundColor: "#fff",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   gap: 31,
  //   ma: 9,
  //   // borderTopWidth: 1,
  //   // borderTopColor: "#E8E8E8",
  //   // justifyContent: 'space-between'
  // },
  // btn: {
  //   width: 70,
  //   height: 40,
  //   borderRadius: 20,
  //   backgroundColor: "transparent",
  //   // backgroundColor: "#F6F6F6",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});


