// import { db } from "../../firebase/config";
// import { collection, getDocs } from "firebase/firestore";

// export const getCommentsFromFirestore = async (id) => {
//   try {
//     const snapShot = await getDocs(collection(db, "posts", id, "comments"));
//     const comments = snapShot.docs.map((doc) => {
//       return { ...doc.data(), id: doc.id };
//     });
//     return comments;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };
