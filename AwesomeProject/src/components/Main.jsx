import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/selectors";
import { UserNav } from "./UserNav";
import { AuthNav } from "./AuthNav";
import { useEffect } from "react";
import { authStateChangeUser } from "../redux/auth/authOperetion";

export const Main = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch()
  
 useEffect(() => {
   dispatch(authStateChangeUser());
 }, []);
  
  return (
    <NavigationContainer>
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </NavigationContainer>
  );
};
