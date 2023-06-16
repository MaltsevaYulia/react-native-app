import {  storage } from "../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadPhotoToServer = async (photo) => {
  try {
    const response = await fetch(photo);
    const file = await response.blob();
    const phototId = Date.now().toString();
    const photoRef = ref(storage, phototId);

    const uploadPhoto = await uploadBytes(photoRef, file);

    const photoUri = await getDownloadURL(uploadPhoto.ref);

    return photoUri;
  } catch (error) {
    console.log("🚀 ~ uploadPhotoToServer ~ error:", error);
  }
};


