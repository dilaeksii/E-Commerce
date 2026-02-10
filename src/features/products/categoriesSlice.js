import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchCategories = createAsyncThunk(
    "categories",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/categories");
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Kategoriler alınamadı",
      );
    }
        },
);

const initialState = {
  items: [],
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
      });
  },
});

export default categoriesSlice.reducer;