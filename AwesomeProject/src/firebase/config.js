// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  //first-awesome-project
  // apiKey: "AIzaSyC9KRTS97gG5Qb-fSSXyeKsgEwMJwCXvhE",
  // authDomain: "first-awesome-project-72a73.firebaseapp.com",
  // projectId: "first-awesome-project-72a73",
  // storageBucket: "first-awesome-project-72a73.appspot.com",
  // messagingSenderId: "592551197341",
  // appId: "1:592551197341:web:e68540fc47320e19fe7274",
  // measurementId: "G-8S9Q55DQG1",
  
  //test-project
  apiKey: "AIzaSyDlz8TDh709nOLVWVsvwpULRFMYSPOV3hk",
  authDomain: "test-project-4eeb2.firebaseapp.com",
  projectId: "test-project-4eeb2",
  storageBucket: "test-project-4eeb2.appspot.com",
  messagingSenderId: "465096554982",
  appId: "1:465096554982:web:9aee6c4e3bf1cb53447e27",
};
const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDlz8TDh709nOLVWVsvwpULRFMYSPOV3hk",
//   authDomain: "test-project-4eeb2.firebaseapp.com",
//   projectId: "test-project-4eeb2",
//   storageBucket: "test-project-4eeb2.appspot.com",
//   messagingSenderId: "465096554982",
//   appId: "1:465096554982:web:9aee6c4e3bf1cb53447e27"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
