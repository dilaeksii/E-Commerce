import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice.js"
import likesReducer from "../features/likes/likeSlice.js"
import userReducer  from "../features/users/userSlice.js";
import authReducer  from "../features/users/authSlice.js";
import categoriesReducer  from "../features/products/categoriesSlice.js"
import cardReducer from "../features/card/cardSlice.js"
import addressReducer from "../features/users/addressSlice.js"
import paymentReducer from "../features/users/paymentSlice.js"
import orderReducer  from "../features/products/orderSlice.js"

export default configureStore({
  reducer: {
    products: productReducer,
    likes: likesReducer,
    user: userReducer,
    auth: authReducer,
    categories: categoriesReducer,
    card: cardReducer,
    address: addressReducer,
    payment: paymentReducer,
    order: orderReducer
  }
});
