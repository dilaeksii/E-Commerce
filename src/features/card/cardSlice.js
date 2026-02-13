import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    totalCard: 0, //sepetteki toplam ürün
    totalPrice: 0, //sepetteki toplam ücret
    product: [], //eklenen ürün detayı
  },
  reducers: {
    toggleCard: (state, action) => {
      const { id, price, img } = action.payload;

      const p = Number(price);
      const existingItem = state.product.find(
        (item) => String(item.id) === String(id),
      );

      if (existingItem) existingItem.count += 1;
      else state.product.push({ id, price: p, img, count: 1 });

      state.totalCard += 1;
      state.totalPrice += p;
    },
    deleteProduct: (state, action) => {
      const id = action.payload;

      const removeId = state.product.findIndex(
        (item) => String(item.id) === String(id),
      );
      if (removeId === -1) return;

      const removed = state.product[removeId];
      state.totalCard -= removed.count;
      state.totalPrice -= removed.price * removed.count;
      state.product.splice(removeId, 1);
    },
    increase: (state, action) => {
      const id = action.payload;

      const increaseId = state.product.findIndex(
        (item) => String(item.id) === String(id),
      );

      const increased = state.product[increaseId];
      increased.count += 1;
      state.totalCard += 1;
      state.totalPrice += increased.price * increased.count;
    },
    decrease: (state, action) => {
      const id = action.payload;

      const decreaseId = state.product.findIndex(
        (item) => String(item.id) === String(id),
      );
      const decreased = state.product[decreaseId];

      decreased.count -= 1;
      state.totalCard -= 1;
      state.totalPrice -= decreased.price * decreased.count;
    },
  },
});

export const { toggleCard, deleteProduct, increase, decrease } =
  cardSlice.actions;
export default cardSlice.reducer;
