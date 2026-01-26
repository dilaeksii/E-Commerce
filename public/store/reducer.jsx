import { LIKE, LOAD_PRODUCTS } from "./action";

const imgId = () => Math.floor(Math.random() * 7) + 1;

export const initial = () =>
  Array.from({ length: 10 }, () => ({
    imageId: imgId(),
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
  }));

export const initialState = {
  products: initial(),
};

export const initialLikes = {
  count: 0,
  liked: false
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      if (state.products.length < 20) {
        return {
          ...state,
          products: [...state.products, ...action.payload],
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export const likesReducer = (state = initialLikes, action) => {
  switch (action.type) {
    case LIKE:
      return {
        ...state,
        liked: !state.liked,
        count: state.liked ? state.count - 1 : state.count + 1,
        
      }

    default:
      return state;
  }
};
