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
import { db } from "../../firebase/config";
import { selectComments, selectUser } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { getCommentsFromFirestore } from "../../helpers/getDataFromFirestore/getCommentsFromFirestore";
import { formatDateTime } from "../../helpers/formatDateTime";
import { getComments, getPosts } from "../../redux/posts/postsOperations";

const CommentsScreen = ({ route }) => {
  const { photo, id, commentsT } = route.params;
  const comments = useSelector(selectComments);
  const user = useSelector(selectUser);
  const [comment, setComment] = useState("");
  // const [comments, setComments] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const comments= posts.find((item) => item.id === id).comments;
  //   console.log("🚀 ~ CommentsScreen ~ comments:", comments);
  //   setComments(comments);
  // }, [posts]);

  const sendComment = async () => {
    if (comment) {
      const commentsRef = await collection(db, "posts", id, "comments");
      const commentsDocRef = await addDoc(commentsRef, {
        comment,
        date: Date.now(),
        avatar: user.photoURL || "",
      });
      dispatch(getComments(id));
    }

    setComment("");
  };

  useEffect(() => {
    // async function fetchData() {
    //   const comments = await getCommentsFromFirestore(id);
    //   console.log("🚀 ~ useEffect ~ comments:", comments);
    //   setComments(comments);
    // }
    // fetchData();
    dispatch(getComments(id));
  }, []);

  // const getComment =async () => {
  //   const comments = await getCommentFromFirestore(id);

  // }

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Image source={{ uri: photo }} style={styles.photo} />
      </View>
      <SafeAreaView>
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
    // backgroundColor: "#F6F6F6",
    // width: 343,

    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "center",
    marginBottom: 8,
  },
  photo: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
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
    // flexDirection: "row-reverse",
  },
  currentUser: { flexDirection: "row" },
  guestUser: { flexDirection: "row-reverse" },
  commetText: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    // width: "100%",
    padding: 16,
    gap: 8,
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
    // borderWidth: 1,
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    // borderColor:transparant,
    backgroundColor: "#FF6C00",
  },
});
