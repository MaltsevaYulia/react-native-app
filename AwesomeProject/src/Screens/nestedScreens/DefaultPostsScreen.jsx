import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";

export const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prev) => [...prev, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.userWrapp}>
          <Image source={require("../../assets/images/user.jpg")} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
        <SafeAreaView>
          <FlatList
            data={posts}
            keyExtractor={(item, indx) => indx.toString()}
            renderItem={({item}) => (
              <View style={styles.postContainer}>
                <View style={styles.photoContainer}>
                  <Image
                    source={{ uri: item.photo }}
                    style={styles.picture}
                  />
                </View>
                <Text style={styles.postName}>{item.name}</Text>
                <View style={styles.postInfo}>
                  <View style={styles.comentsWrapp}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("CommentsScreen", {
                          photo: item.photo,
                        })
                      }
                    >
                      <Feather
                        name="message-circle"
                        size={24}
                        color="#BDBDBD"
                      />
                    </TouchableOpacity>
                    <Text>0</Text>
                  </View>
                  <View style={styles.regionWrap}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("MapScreen", {
                          location: item.location,
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
  userInfo: {
    // alignItems: 'center',
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
  postContainer: {
    gap:8,
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
  btn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
});
