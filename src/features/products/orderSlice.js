import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrder = createAsyncThunk(
  "order",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/order",
        payload,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Sipariş oluşturulamadı",
      );
    }
  },
);

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrder: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Sipariş oluşturulamadı";
      });
  },
});

export const { resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
