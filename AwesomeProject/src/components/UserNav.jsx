import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet, View, MyButton } from "react-native";
import { useDispatch } from "react-redux";
import { PostsScreen } from "../Screens/PostsScreen";
import { logOut } from "../redux/auth/authOperetion";
import { CreatePostsScreen } from "../Screens/CreatePostsScreen";
import { ProfileScreen } from "../Screens/ProfileScreen";

const MaineTab = createBottomTabNavigator();

export const UserNav = () => {
const dispatch = useDispatch();

    return (
      <MaineTab.Navigator
        screenOptions={({ route }) => ({
          tabBarButton: ({
            focused,
            onPress,
            accessibilityState,
            accessibilityLabel,
          }) => {
            const selected = accessibilityState.selected;
            const routeName = route.name;
            // const x = accessibilityLabel === "PostsScreen, tab, 1 of 3";
            // const y = accessibilityLabel === "ProfileScreen, tab, 3 of 3";

            let iconName;

            if (routeName === "PostsScreen") {
              iconName = "grid";
            } else if (routeName === "CreatePostsScreen") {
              iconName = "plus";
            } else if (routeName === "ProfileScreen") {
              iconName = "user";
            }

            let buttonStyle = {
              ...styles.btn,
            };

            let iconStyle = {
              marginBottom: 3,
            };

            if (routeName === "PostsScreen" && selected) {
              buttonStyle.backgroundColor = "#FF6C00";
              iconStyle.color = "#fff";
            } else if (routeName === "ProfileScreen" && selected) {
              buttonStyle.backgroundColor = "#FF6C00";
              iconStyle.color = "#fff";
            } else if (routeName === "CreatePostsScreen" && selected) {
              buttonStyle.backgroundColor = "#FF6C00";
              iconStyle.color = "#fff";
            }
            return (
              <View style={styles.footer}>
                <TouchableOpacity style={buttonStyle} onPress={onPress}>
                  <Feather name={iconName} size={24} style={iconStyle} />
                </TouchableOpacity>
              </View>
            );
          },
          // Add the headerShown option for ProfileScreen
          // ...(route.name === "ProfileScreen" && { headerShown: false }),
        })}
      >
        <MaineTab.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={() => ({
            title: "Публикации",
            headerTitleStyle: styles.headerTitle,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  console.log("Это икопка logOut в routing");
                  dispatch(logOut());
                  // dispatch(authStateChangeUser());
                  // Do something
                }}
                style={{ paddingRight: 16 }}
              >
                <Feather name="log-out" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            ),
          })}
        />
        <MaineTab.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{
            tabBarStyle: { display: "none" },
            title: "Создать публикацию",
            headerTitleStyle: styles.headerTitle,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  // Do something
                }}
                style={{ paddingLeft: 16 }}
              >
                <Feather name="arrow-left" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            ),
          }}
        />
        <MaineTab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </MaineTab.Navigator>
    );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 22,
    color: "#212121",
    paddingVertical: 11,
  },
  footer: {
    // height: 83,
    flex: 1,
    // paddingHorizontal: 82,
    paddingTop: 9,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 31,
    ma: 9,
    // borderTopWidth: 1,
    // borderTopColor: "#E8E8E8",
    // justifyContent: 'space-between'
  },
  btn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "transparent",
    // backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
});
