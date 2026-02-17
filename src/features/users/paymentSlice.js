import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cardInfo = createAsyncThunk(
  "cardInfo",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return thunkAPI.rejectWithValue("Token yok");

      if (token) {
        const response = await axios.get(
          "https://workintech-fe-ecommerce.onrender.com/user/card",
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

export const cardAdd = createAsyncThunk(
  "cardAdd",
  async (cardForm, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return thunkAPI.rejectWithValue("Token yok");

      if (token) {
        const response = await axios.post(
          "https://workintech-fe-ecommerce.onrender.com/user/card",
          cardForm,
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

export const cardDelete = createAsyncThunk(
  "card/cardDelete",
  async (cardId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return thunkAPI.rejectWithValue("Token yok");

      await axios.delete(
        `https://workintech-fe-ecommerce.onrender.com/user/card/${cardId}`,
        { headers: { Authorization: token } },
      );

      return cardId;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Kart silinemedi",
      );
    }
  },
);

export const cardUpdate = createAsyncThunk(
  "card/cardUpdate",
  async (formData, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return thunkAPI.rejectWithValue("Token yok");
      const res = await axios.put(
        "https://workintech-fe-ecommerce.onrender.com/user/card",
        formData,
        { headers: { Authorization: token } },
      );

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Kart güncellenemedi",
      );
    }
  },
);

const initialState = {
  cards: [],
  selectedcardId: null,
  token: localStorage.getItem("token") || null,
  error: null,
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    selectCard: (state, action) => {
      state.selectedcardId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cardInfo.fulfilled, (state, action) => {
      state.cards = action.payload;
      if (!state.selectedcardId && state.cards.length > 0) {
        state.selectedcardId = state.cards[0].id;
      }
    });

    builder.addCase(cardDelete.fulfilled, (state, action) => {
      const id = action.payload;
      state.cards = state.cards.filter(
        (a) => String(a.id) !== String(id),
      );

      if (String(state.selectedcardId) === String(id)) {
        state.selectedcardId = state.cards.length
          ? state.cards[0].id
          : null;
      }
    });
    builder.addCase(cardUpdate.fulfilled, (state, action) => {
      const updated = action.payload; 
      const idx = state.cards.findIndex(
        (a) => String(a.id) === String(updated.id),
      );
      if (idx !== -1) state.cards[idx] = updated;
    });
  },
});

export const { selectCard } = cardSlice.actions;
export default cardSlice.reducer;
