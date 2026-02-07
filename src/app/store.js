import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice.js"
import likesReducer from "../features/likes/likeSlice.js"


export default configureStore({
  reducer: {
    product: productReducer,
    likes: likesReducer
  }
})