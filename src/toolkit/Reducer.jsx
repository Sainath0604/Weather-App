import { createSlice } from "@reduxjs/toolkit";

const FavSlice = createSlice({
  name: "favorites",
  initialState: {
    items: JSON.parse(localStorage.getItem("favorites")) || [],
  },

  reducers: {
    addToFav: (state, action) => {
      const existingCity = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!existingCity) {
        state.items.push(action.payload);
      } else {
        console.warn(
          `City with id ${action.payload.id} already exists in favorites!`
        );
      }
      localStorage.setItem("favorites", JSON.stringify(state.items));
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
