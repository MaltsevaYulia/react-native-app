import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
// import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export const CreatePostsScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <Text style={styles.title}>Создать публикацию</Text>
          <View style={styles.iconContainer}>
            <Feather name="arrow-left" size={24} color="#BDBDBD" />
          </View>
        </View> */}
        <View style={styles.main}>
          <View style={styles.photo}>
            <View style={styles.round}>
              <MaterialIcons
                style={styles.camera}
                name="photo-camera"
                size={24}
                color="black"
              />
            </View>
          </View>
          <Text style={styles.addPhoto}>Загрузите фото</Text>
          <View style={styles.photoInfo}>
            <TextInput
              style={styles.nameInpt}
              placeholder="Название..."
              placeholderTextColor="#BDBDBD"
            />
            <View style={styles.location}>
              <Feather name="map-pin" size={24} color="#BDBDBD" />
              <TextInput
                style={styles.locText}
                placeholder="Местность..."
                placeholderTextColor="#BDBDBD"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.pablishBtn}>
            <Text style={styles.btnTitle}>Опубликовать</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.btn}>
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // header: {
  //   flex: 0.1,
  //   backgroundColor: "#fff",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderBottomWidth: 1,
  //   borderBottomColor: "#E8E8E8",
  // },
  // title: {
  //   fontFamily: "Roboto-Medium",
  //   fontSize: 17,
  //   fontWeight: 500,
  //   lineHeight: 22,
  //   color: "#212121",
  // },
  // iconContainer: {
  //   position: "absolute",
  //   left: 16,
  // },
  main: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  photo: {
    backgroundColor: "#F6F6F6",
    // width: 343,
    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  round: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    width: 60,
    height: 60,
    borderRadius: "50%",
  },
  camera: { color: "#BDBDBD" },
  userName: {
    fontFamily: "Roboto-Bold",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  addPhoto: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 32,
    color: "#BDBDBD",
  },
  photoInfo: {
    gap: 16,
    marginBottom: 32,
  },
  nameInpt: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    color: "#212121",
  },
  location: {
    flexDirection: "row",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    gap: 4,
  },
  locText: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  pablishBtn: {
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
  btnTitle: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
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
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
});
