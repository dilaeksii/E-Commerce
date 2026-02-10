import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://workintech-fe-ecommerce.onrender.com/products",
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Ürünler alınamadı",
      );
    }
  },
);

const initialState = {
  products: [],
  total: null,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state, action) => {

    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.total = action.payload.total
    });
  },
});

export const { loadProducts } = productSlice.actions;
export default productSlice.reducer;
