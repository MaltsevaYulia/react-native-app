import React, { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { selectPosts, selectUser } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { formatDateTime } from "../../helpers/formatDateTime";
import { addComment } from "../../redux/posts/postsOperations";

const CommentsScreen = ({ route }) => {
  const { photo, id } = route.params;
  const posts = useSelector(selectPosts);
  const user = useSelector(selectUser);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const comments = posts.find((item) => item.id === id).comments;
    setComments(comments);
  }, [posts]);

  const sendComment = async () => {
    if (comment) {
      const newComment = {
        comment,
        date: Date.now(),
        avatar: user.photoURL || "",
      };
      dispatch(addComment({ id, newComment }));
    }
    setComment("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Image source={{ uri: photo }} style={styles.photo} />
      </View>
      <SafeAreaView style={styles.list}>
        <FlatList
          data={comments}
          keyExtractor={(item) => item.date.toString()}
          renderItem={({ item }) => {
            return (
              <View
                style={[
                  styles.commetWrapper,
                  item.avatar === user.photoURL
                    ? styles.currentUser
                    : styles.guestUser,
                ]}
              >
                {item.avatar ? (
                  <Image source={{ uri: item.avatar }} style={styles.avatar} />
                ) : (
                  <View style={styles.avatar} />
                )}
                <View style={styles.commetText}>
                  <Text style={styles.comment}>{item.comment}</Text>
                  <Text style={styles.date}>{formatDateTime(item.date)}</Text>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
      <View style={styles.commentInput}>
        <TextInput
          style={styles.inputText}
          placeholder="Комментировать..."
          placeholderTextColor="#BDBDBD"
          value={comment}
          onChangeText={(text) => setComment(text)}
        />
        <TouchableOpacity style={styles.arrow} onPress={sendComment}>
          <Feather name="arrow-up" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "space-between",
  },
  postContainer: {
    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    flexDirection: "column",
    marginBottom: 8,
    marginTop: 32,
  },
  photo: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  list: {
    flex: 1,
    marginBottom: 31,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },

  commetWrapper: {
    gap: 16,
    marginBottom: 24,
    alignItems: "center",
  },
  currentUser: { flexDirection: "row" },
  guestUser: { flexDirection: "row-reverse" },
  commetText: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    padding: 16,
    gap: 8,
    width: 300,
    alignItems: "flex-start",
  },
  comment: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  date: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
  },
  commentInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    padding: 16,
    marginBottom: 16,
  },
  inputText: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
  },
  arrow: {
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#FF6C00",
  },
});
