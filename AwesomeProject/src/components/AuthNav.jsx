import { createStackNavigator } from "@react-navigation/stack";
// import { HomeScreen } from "../Screens/HomeScreen";
import { LoginScreen } from "../Screens/LoginScreen";
import { RegistrationScreen } from "../Screens/RegistrationScreen";


const MainStack = createStackNavigator();

export const AuthNav = () => {
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
      {/* <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      /> */}
    </MainStack.Navigator>
  );
};
