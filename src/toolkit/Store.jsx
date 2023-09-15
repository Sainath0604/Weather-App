import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./Reducer";

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});

export default store;
