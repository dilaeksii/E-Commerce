import { createSlice } from "@reduxjs/toolkit";

const imgId = () => Math.floor(Math.random() * 7) + 1;

const createProduct = () => ({
  imageId: imgId(),
  title: "Graphic Design",
  department: "English Department",
  price: "$16.48",
  salePrice: "$6.48",
});

const initialState = {
  products: Array.from({ length: 10 }, createProduct),
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProducts: (state) => {
      if (state.products.length < 25) {
        state.products.push(...Array.from({ length: 5 }, createProduct));
      } else {
        return;
      }
    },
  },
});

export const { loadProducts } = productSlice.actions;
export default productSlice.reducer;
