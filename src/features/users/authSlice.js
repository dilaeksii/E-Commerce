import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const verifyToken = createAsyncThunk(
  "auth", //"auth/fulfilled" "auth/rejected" "auth/pending"
  async (_, thunkAPI) => {
    //dispatch edilecek payloada gerek olmadığı için ilk argüman _
    try {
      const token = localStorage.getItem("token");
      if (!token) return thunkAPI.rejectWithValue("Token yok");

      if (token) {
        const response = await axios.get(
          "https://workintech-fe-ecommerce.onrender.com/verify",
          { headers: { Authorization: token } },
        );
        axios.defaults.headers.common["Authorization"] = token;
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Verify başarısız",
      );
    }
  },
);

const initialState = {
  user: { name: null, email: null, role_id: null },
  token: localStorage.getItem("token") || null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
          role_id: action.payload.role_id,
        };
        state.token = action.payload.token;
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.user = { name: null, email: null, role_id: null };
        state.token = null;
        state.error = action.payload || action.error.message;

        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
      });
  },
});

export default authSlice.reducer;