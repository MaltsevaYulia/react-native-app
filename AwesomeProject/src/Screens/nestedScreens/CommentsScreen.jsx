import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import {db} from "../../firebase/config"
import { selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore";

const CommentsScreen = ({ route }) => {
  const { photo,id } = route.params; 
  console.log("🚀 ~ CommentsScreen ~ id:", id)
  const user=useSelector(selectUser)
  const [comment, setComment] = useState("");

  const sendComment =async () => {
    
    const commentsRef =await collection(
      db,
      "posts",
      id,
      "comments"
    );
    const commentsDocRef = await addDoc(commentsRef, {
      comment,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Image source={{ uri: photo }} style={styles.photo} />
      </View>
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
  container: { paddingHorizontal: 16 ,backgroundColor:'#ffffff'},
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
  commentInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    padding: 16,
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
