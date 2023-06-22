import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addLikes } from "../redux/posts/postsOperations";

export const PostsList = ({ posts, navigation }) => {
  const dispatch = useDispatch();

  const addLike = (id, likes) => {
    const newLikes = likes + 1;
    dispatch(addLikes({ id, newLikes }));
  };
  return (
    <SafeAreaView style={styles.list}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View style={styles.photoContainer}>
              <Image source={{ uri: item.photo }} style={styles.picture} />
            </View>
            <Text style={styles.postName}>{item.name}</Text>
            <View style={styles.postInfo}>
              <View style={styles.wrapp}>
                <View style={styles.comentsWrapp}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("CommentsScreen", {
                        photo: item.photo,
                        id: item.id,
                        comments: item.comments,
                      })
                    }
                  >
                    <Feather
                      name="message-circle"
                      size={24}
                      color={item.comments.length <= 0 ? "#BDBDBD" : "#FF6C00"}
                    />
                  </TouchableOpacity>
                  <Text>{item.comments.length}</Text>
                </View>
                <View style={styles.comentsWrapp}>
                  <TouchableOpacity
                    onPress={() => addLike(item.id, item.likes)}
                  >
                    <Feather
                      style={styles.likeIcon}
                      name="thumbs-up"
                      size={24}
                      color={item.likes === 0 ? "#BDBDBD" : "#FF6C00"}
                    />
                  </TouchableOpacity>
                  <Text>{item.likes}</Text>
                </View>
              </View>
              <View style={styles.regionWrap}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("MapScreen", {
                      location: { ...item.location },
                    })
                  }
                >
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                </TouchableOpacity>
                <Text style={styles.region}>{item.region}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: { flex: 1 },
  postContainer: {
    gap: 8,
    marginBottom: 34,
  },
  photoContainer: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    // marginBottom: 8,
  },
  picture: {
    display: "flex",
    width: "100%",
    height: 240,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
  },
  postInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postName: {
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  wrapp: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
  },
  comentsWrapp: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  regionWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  region: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#212121",
  },
});
