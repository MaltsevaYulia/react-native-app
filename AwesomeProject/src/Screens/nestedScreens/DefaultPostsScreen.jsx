import { View } from "react-native";
import { StyleSheet } from "react-native";
import { PostsList } from "../../components/PostsList";
import { UserInfo } from "../../components/userInfo";

export const DefaultPostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <UserInfo />
        <PostsList navigation={navigation} />
      </View>
    </View>
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
});
