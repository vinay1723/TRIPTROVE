import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
import userReducer from "./src/assets/features/user/userSlice";
import tourReducer from "./src/assets/features/tours/tourSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  tour: tourReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

// import tourReducer from "./src/assets/features/tours/tourSlice";
// import userReducer from "./src/assets/features/user/userSlice";

// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     tour: tourReducer,
//   },
// });

// export default store;
