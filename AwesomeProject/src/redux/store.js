import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { rootReduser, authSlice } from "./auth/authSlice";
import { postsSlice } from "./posts/postsSlice";


const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};



// const reducer = persistReducer(persistConfig, rootReduser);
const reducer = persistReducer(persistConfig, authSlice.reducer);

 const store = configureStore({
   reducer: {
     posts: postsSlice.reducer,
     auth: reducer,
   },
   middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
       serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
       },
     }),
 });
export default store;
// const persistor = persistStore(store);

// export default { store, persistor };