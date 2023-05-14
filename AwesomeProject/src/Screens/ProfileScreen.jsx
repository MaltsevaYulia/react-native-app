import { Layout } from "../components/Layout";
import { AntDesign, Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export const ProfileScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.avaWrapper}>
          <View style={styles.addBtn}>
            <AntDesign
              style={styles.delIcon}
              name="pluscircleo"
              size={25}
              color="#BDBDBD"
            />
          </View>
        </View>
        <Feather
          style={styles.outIcon}
          name="log-out"
          size={24}
          color="#BDBDBD"
        />
        <Text style={styles.title}>Natali Romanova</Text>
        <Text style={styles.text}>Лес</Text>
        <View style={styles.postInfo}>
          <View style={styles.likesWrapp}>
            <Feather
              style={styles.circleIcon}
              name="message-circle"
              size={24}
              color="#FF6C00"
            />
            <Text style={styles.numb}>8</Text>
            <Feather
              style={styles.likeIcon}
              name="thumbs-up"
              size={24}
              color="#FF6C00"
            />
            <Text>57</Text>
          </View>
          <View style={styles.locWrapp}>
            <Feather name="map-pin" size={24} color="#BDBDBD" />
            <Text>Ukraine</Text>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 0.7,
    paddingHorizontal: 16,
    // justifyContent: "center",
    // alignItems: "center",
  },
  avaWrapper: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: 0,
    left: "50%",
    transform: [{ translateX: -60 }, { translateY: -60 }],
  },
  addBtn: {
    position: "absolute",
    // borderColor: '#FF6C00',
    // borderRadius: '50%',
    // borderWidth: 1,
    // backgroundColor: '#FFFFFF',
    width: 25,
    height: 25,
    right: 0,
    bottom: 12,
    transform: [{ translateX: 12.5 }],
  },
  delIcon: {
    transform: [{ rotate: "-45deg" }],
  },
  outIcon: {
    position: "absolute",
    right: 16,
    top: 22,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    color: "#212121",
    marginTop: 92,
    marginBottom: 32,
  },
  text: {
    marginBottom: 8,
  },
  postInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  likesWrapp: {
    flexDirection: "row",
    alignItems: "center",
  },
  circleIcon: {
    marginRight: 4,
  },
  numb: {
    marginRight: 24,
  },
  likeIcon: {
    marginRight: 4,
  },
  locWrapp: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
});
