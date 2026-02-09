import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice.js"
import likesReducer from "../features/likes/likeSlice.js"
import userReducer  from "../features/users/userSlice.js";

export default configureStore({
  reducer: {
    product: productReducer,
    likes: likesReducer,
    user: userReducer
  }
})