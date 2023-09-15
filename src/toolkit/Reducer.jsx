import { createSlice } from "@reduxjs/toolkit";

const FavSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },

  reducers: {
    addToFav: (state, action) => {
      state.items.push(action.payload);
    },
    emptyFav: (state) => {
      state.items = [];
    },
    removeFromFav: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.warn(
          `Can't (id: ${action.payload}) as it's not in the favorties!`
        );
      }
    },
  },
});

export const { addToFav, emptyFav, removeFromFav } = FavSlice.actions;

export default FavSlice.reducer;
