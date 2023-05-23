import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CommentsScreen = ({ route }) => {
  const { photo } = route.params;
  console.log("🚀 ~ CommentsScreen ~ route.params:", route.params);

  return (
    <View style={styles.container}>
     
      <View style={styles.postContainer}>
              <Image source={{ uri: photo }} style={ styles.photo} />
      </View>
    </View>
  );
};
export default CommentsScreen;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16 },
  postContainer: {
    // backgroundColor: "#F6F6F6",
    // width: 343,
    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    // justifyContent: "center",
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
});
