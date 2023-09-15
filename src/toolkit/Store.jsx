import { configureStore } from "@reduxjs/toolkit";
import favReducer from "./Reducer";

const store = configureStore({
  reducer: {
    fav: favReducer,
  },
});

export default store;
