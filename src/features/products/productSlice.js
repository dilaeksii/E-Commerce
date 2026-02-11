import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products",
  async ({ sort, category, filter } = {}, thunkAPI) => {
    try {
      const params = {};
      if (sort) params.sort = sort;
      if (category) params.category = category;
      if (filter) params.filter = filter;
      const response = await axios.get(
        "https://workintech-fe-ecommerce.onrender.com/products",
        { params },
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
    loadProducts: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.total = action.payload.total;
    });
  },
});

export const { loadProducts } = productSlice.actions;
export default productSlice.reducer;
