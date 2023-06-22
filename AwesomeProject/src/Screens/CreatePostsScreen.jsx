import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Image,
} from "react-native";

import { Feather, MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { db, storage } from "../firebase/config";

import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { choosePhotoFromGallery } from "../helpers/choosePhotoFromGallery";
import { uploadPhotoToServer } from "../helpers/uploadPhotoToServer";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/posts/postsOperations";


export const CreatePostsScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
 const dispatch=useDispatch()

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View style={styles.photo} />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // const writeDataToFirestore = async () => {
  //   const photoUrl = await uploadPhotoToServer(photo);

  //   try {
  //     const docRef = await addDoc(collection(db, "posts"), {
  //       photo:photoUrl,
  //       name,
  //       region,
  //       likes:0,
  //       location: {
  //         latitude: location?.coords.latitude || "",
  //         longitude: location?.coords.longitude || "",
  //       },
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //     throw e;
  //   }
  // };

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      console.log("🚀 ~ takePhoto ~ uri:", uri)
      await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
    }
  };

  const choosePhoto = async () => {
    const uri = await choosePhotoFromGallery()
    console.log("🚀 ~ choosePhoto ~ uri:", uri)
    setPhoto(uri)
  };

  const publish = async () => {
    let location = await Location.getCurrentPositionAsync({});
    console.log("🚀 ~ publish ~ location:", location);
    // const coords = {
    //   latitude: location.coords.latitude,
    //   longitude: location.coords.longitude,
    // };
    await setLocation(location);
    const photoUrl = await uploadPhotoToServer(photo);
    dispatch(
      addPost({
        photo: photoUrl,
        name,
        region,
        likes: 0,
        comments:[],
        location: {
          latitude: location?.coords.latitude || "",
          longitude: location?.coords.longitude || "",
        },
      })
    );
    // await writeDataToFirestore();
    setName("");
    setRegion("");
    setPhoto("");
    navigation.navigate("DefaultPostsScreen", {
      photo,
      name,
      region,
      location,
    });

    
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.main}>
          {/* <View style={styles.photo}> */}
          {photo ? (
            <Image source={{ uri: photo }} style={styles.photo} />
          ) : (
            <Camera style={styles.photo} type={type} ref={setCameraRef}>
              <TouchableOpacity style={styles.round} onPress={takePhoto}>
                <MaterialIcons
                  style={styles.camera}
                  name="photo-camera"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </Camera>
          )}
          {/* </View> */}
          <TouchableOpacity onPress={choosePhoto}>
            <Text style={styles.addPhoto}>Загрузите фото</Text>
          </TouchableOpacity>

          <View style={styles.photoInfo}>
            <TextInput
              style={styles.nameInpt}
              placeholder="Название..."
              placeholderTextColor="#BDBDBD"
              onChangeText={(text) => setName(text)}
            />
            <View style={styles.location}>
              <Feather name="map-pin" size={24} color="#BDBDBD" />
              <TextInput
                style={styles.locText}
                placeholder="Местность..."
                placeholderTextColor="#BDBDBD"
                onChangeText={(text) => setRegion(text)}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.pablishBtn} onPress={publish}>
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
    overflow: "hidden",
  },
  // picture: { width: "100%", height: "100%" },
  round: {
    position: "absolute",
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
