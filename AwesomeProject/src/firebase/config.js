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
const firebaseConfig = {
  apiKey: "AIzaSyC9KRTS97gG5Qb-fSSXyeKsgEwMJwCXvhE",
  authDomain: "first-awesome-project-72a73.firebaseapp.com",
  projectId: "first-awesome-project-72a73",
  storageBucket: "first-awesome-project-72a73.appspot.com",
  messagingSenderId: "592551197341",
  appId: "1:592551197341:web:e68540fc47320e19fe7274",
  measurementId: "G-8S9Q55DQG1",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
