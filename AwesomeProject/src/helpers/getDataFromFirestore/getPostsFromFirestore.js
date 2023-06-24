// import {db} from "../../firebase/config"
// import { collection, getDocs } from "firebase/firestore";

// export const getPostsFromFirestore = async () => {
//     try {
//       const snapShot = await getDocs(collection(db, "posts"));
//       const postsData = snapShot.docs.map((doc) => {
//         return { ...doc.data(), id: doc.id };
//       });
//       return postsData;
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
// }

