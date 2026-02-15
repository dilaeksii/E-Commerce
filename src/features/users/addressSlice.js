import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addressInfo = createAsyncThunk(
  "addressInfo",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return thunkAPI.rejectWithValue("Token yok");

      if (token) {
        const response = await axios.get(
          "https://workintech-fe-ecommerce.onrender.com/user/address",
          { headers: { Authorization: token } },
        );
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Kullanıcı kayıtlı değil",
      );
    }
  },
);

export const addressAdd = createAsyncThunk(
  "addressAdd",
  async (formData, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return thunkAPI.rejectWithValue("Token yok");

      if (token) {
        const response = await axios.post(
          "https://workintech-fe-ecommerce.onrender.com/user/address",
          formData,
          { headers: { Authorization: token } },
        );
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Kullanıcı kayıtlı değil",
      );
    }
  },
);

export const addressDelete = createAsyncThunk(
  "address/addressDelete",
  async (addressId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return thunkAPI.rejectWithValue("Token yok");

      await axios.delete(
        `https://workintech-fe-ecommerce.onrender.com/user/address/${addressId}`,
        { headers: { Authorization: token } },
      );

      return addressId;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Adres silinemedi",
      );
    }
  },
);

export const addressUpdate = createAsyncThunk(
  "address/addressUpdate",
  async (formData, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return thunkAPI.rejectWithValue("Token yok");
      const res = await axios.put(
        "https://workintech-fe-ecommerce.onrender.com/user/address",
        formData,
        { headers: { Authorization: token } },
      );

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Adres güncellenemedi",
      );
    }
  },
);

const initialState = {
  addresses: [],
  selectedAddressId: null,
  token: localStorage.getItem("token") || null,
  error: null,
};

const addressSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    selectAddress: (state, action) => {
      state.selectedAddressId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addressInfo.fulfilled, (state, action) => {
      state.addresses = action.payload;
      if (!state.selectedAddressId && state.addresses.length > 0) {
        state.selectedAddressId = state.addresses[0].id;
      }
    });

    builder.addCase(addressDelete.fulfilled, (state, action) => {
      const id = action.payload;
      state.addresses = state.addresses.filter(
        (a) => String(a.id) !== String(id),
      );

      if (String(state.selectedAddressId) === String(id)) {
        state.selectedAddressId = state.addresses.length
          ? state.addresses[0].id
          : null;
      }
    });
    builder.addCase(addressUpdate.fulfilled, (state, action) => {
      const updated = action.payload; 
      const idx = state.addresses.findIndex(
        (a) => String(a.id) === String(updated.id),
      );
      if (idx !== -1) state.addresses[idx] = updated;
    });
  },
});

export const { selectAddress, deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;
