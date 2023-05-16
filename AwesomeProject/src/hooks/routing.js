import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { CreatePostsScreen } from "../Screens/CreatePostsScreen";
import { HomeScreen } from "../Screens/HomeScreen";
import { LoginScreen } from "../Screens/LoginScreen";
import { PostsScreen } from "../Screens/PostsScreen";
import { ProfileScreen } from "../Screens/ProfileScreen";
import { RegistrationScreen } from "../Screens/RegistrationScreen";
import { AntDesign, Feather } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet, View } from "react-native";
const MainStack = createStackNavigator();
const MaineTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (isAuth) {
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
          
        })}
      >
        <MaineTab.Screen name="PostsScreen" component={PostsScreen} />
        <MaineTab.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
        />
        <MaineTab.Screen name="ProfileScreen" component={ProfileScreen} />
      </MaineTab.Navigator>
    );
    return (
      <MaineTab.Navigator
        screenOptions={{
          style: {
            backgroundColor: "transparent",
          },
        }}
      >
        <MaineTab.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <View style={styles.footer}>
                <Feather name="grid" size={24} color="rgba(33, 33, 33, 0.8)" />
              </View>
            ),
            tabBarActiveTintColor: "rgba(33, 33, 33, 0.8)",
            headerShown: false,
            tabBarVisible: false,
          }}
        />
        <MaineTab.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <TouchableOpacity style={styles.btn}>
                <Feather name="plus" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            ),
            tabBarActiveTintColor: "#F6F6F6",
            headerShown: false,
          }}
        />
        <MaineTab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
            ),
            tabBarActiveTintColor: "rgba(33, 33, 33, 0.8)",
            headerShown: false,
          }}
        />
      </MaineTab.Navigator>
    );
  }
  return (
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
  );
};

const styles = StyleSheet.create({
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
