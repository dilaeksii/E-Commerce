import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrder = createAsyncThunk(
  "order/createOrder",
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

export const fetchOrders = createAsyncThunk(
  "order/fetchOrders",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return thunkAPI.rejectWithValue("Token yok");

      const res = await axios.get(
        "https://workintech-fe-ecommerce.onrender.com/order",
        { headers: { Authorization: token } },
      );

      return res.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Siparişler alınamadı",
      );
    }
  },
);



const initialState = {
  data: null,          
  status: "idle",
  error: null,

  orders: [],          
  ordersStatus: "idle",
  ordersError: null,
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
      })
      .addCase(fetchOrders.pending, (state) => {
        state.ordersStatus = "loading";
        state.ordersError = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.ordersStatus = "succeeded";
        state.orders = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.ordersStatus = "failed";
        state.ordersError = action.payload || "Siparişler alınamadı";
      });
  },
});

export const { resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
