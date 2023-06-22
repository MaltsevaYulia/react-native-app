import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, selectUser, selectComments } from "../../redux/selectors";
import { getPosts } from "../../redux/posts/postsOperations";
import { PostsList } from "../../components/PostsList";

export const DefaultPostsScreen = ({ route, navigation }) => {
  const posts = useSelector(selectPosts);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.userWrapp}>
          {user.photoURL ? (
            <Image source={{ uri: user.photoURL }} style={styles.avatar} />
          ) : (
            <View style={styles.noAvatar} />
          )}
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
          </View>
        </View>
        <PostsList posts={posts} navigation={navigation} />
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
  userWrapp: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 32,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  noAvatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  userInfo: {
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
  btn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
});
