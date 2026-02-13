import { createSlice } from "@reduxjs/toolkit";

const likesSlice = createSlice({
  name: "likes",
  initialState: {
    likedItems: {},
    value: 0,
  },
  reducers: {
    toggleLike: (state, action) => {
      const id = action.payload;
      state.likedItems[id] = !state.likedItems[id];
      state.value += state.likedItems[id] ? 1 : -1;
    },
  },
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;
