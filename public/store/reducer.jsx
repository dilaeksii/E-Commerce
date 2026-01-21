import { LOAD_CLOTHES } from "./action";

const imgId = () => Math.floor(Math.random() * 7) + 1;

const initial = () => {
  Array.from({ length: 10 }, () => ({
    imageId: imgId(),
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
  }));
};

export const initialState = {
    clothes: initial(),
}

export const loadClothesreducer = (state, action) => {
    switch (action.type) {
    case LOAD_CLOTHES:
      return {
        ...state,
        clothes: [...state.clothes, ...action.payload],
      };

    default:
      return state;
  }
};
