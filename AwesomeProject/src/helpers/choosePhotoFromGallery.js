
import * as ImagePicker from "expo-image-picker";

export const choosePhotoFromGallery =async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [3, 2],
      quality: 1,
    });
    if (!result.canceled) {
      return result.assets[0].uri
    }
};
