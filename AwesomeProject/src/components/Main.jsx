import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoggedIn } from "../redux/selectors";
import { authStateChangeUser } from "../redux/auth/authOperetion";
import { UserNav } from "./UserNav";
import { AuthNav } from "./AuthNav";

export const Main = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authStateChangeUser());
  // }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </NavigationContainer>
  );
};
