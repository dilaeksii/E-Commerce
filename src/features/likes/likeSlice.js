import { createSlice } from "@reduxjs/toolkit";

const likesSlice = createSlice({
  name: "likes",
  initialState: {
    liked: false,
    value: 0,
  },
  reducers: {
    toggleLike: (state) => {
      state.liked = !state.liked;
      state.value += state.liked ? 1 : -1;
    },
  },
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;
