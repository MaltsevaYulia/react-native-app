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
import { selectUser } from "../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/auth/authOperetion";

export const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const dispatch=useDispatch()
 
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
        <TouchableOpacity onPress={()=>dispatch(logOut())}>
          <Feather
            style={styles.outIcon}
            name="log-out"
            size={24}
            color="#BDBDBD"
          />
        </TouchableOpacity>
        <Text style={styles.title}>{user.name}</Text>
        <View>
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
    textAlign: "center",
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
