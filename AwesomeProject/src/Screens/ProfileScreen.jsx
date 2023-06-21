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
  Image,
} from "react-native";
import { selectPosts, selectUser } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  logOut,
  updateUserPhoto,
} from "../redux/auth/authOperetion";
import { choosePhotoFromGallery } from "../helpers/choosePhotoFromGallery";
import { uploadPhotoToServer } from "../helpers/uploadPhotoToServer";
import { PostsList } from "../components/PostsList";

export const ProfileScreen = ({ navigation }) => {
  const user = useSelector(selectUser);
  const { photoURL } = user;
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  const addAvatar = async () => {
    const img = await choosePhotoFromGallery();
    const uri = await uploadPhotoToServer(img);
    await dispatch(updateUserPhoto(uri));
  };

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.avaWrapper}>
          {user.photoURL && (
            <Image source={{ uri: user.photoURL }} style={styles.ava} />
          )}
          <TouchableOpacity style={styles.addBtn} onPress={addAvatar}>
            <AntDesign
              style={[photoURL ? styles.delIcon : styles.addIcon]}
              name="pluscircleo"
              size={25}
              color={photoURL ? "#BDBDBD" : "#FF6C00"}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => dispatch(logOut())}>
          <Feather
            style={styles.outIcon}
            name="log-out"
            size={24}
            color="#BDBDBD"
          />
        </TouchableOpacity>
        <Text style={styles.title}>{user.name}</Text>
        <PostsList posts={posts} navigation={navigation} />
      </View>
      {/* <View style={styles.footer}>
        <Feather name="grid" size={24} color="rgba(33, 33, 33, 0.8)" />
        <TouchableOpacity style={styles.btn}>
          <Feather name="user" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <AntDesign name="plus" size={24} color="rgba(33, 33, 33, 0.8)" />
      </View> */}
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
    transform: [{ translateX: -50 }, { translateY: -60 }],
  },
  ava: {
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 16,
  },
  addBtn: {
    position: "absolute",
    // borderColor: '#FF6C00',
    borderRadius: "50%",
    // borderWidth: 1,
    backgroundColor: "#FFFFFF",
    width: 25,
    height: 25,
    right: 0,
    bottom: 12,
    transform: [{ translateX: 12.5 }],
  },
  addIcon: {},
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
    textAlign: "center",
  },
  footer: {
    // height: 83,
    flex: 0.1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 31,
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
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
