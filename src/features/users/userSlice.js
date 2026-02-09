import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk oluşturuyoruz
export const login = createAsyncThunk(
  "user/login", //"user/login/pending" "user/login/fulfilled" "user/login/rejected" => 3 tane action döner
  async ({ email, password, rememberMe }, thunkAPI) => {
    //email,password,rememberMe dispatch edilecek değerler
    //thunkAPI dispatch getState rejectWithValue gibi Redux araçlarını içerir.
    try {
      //console.log("SENDING LOGIN:", { email, password });
      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } },
      ); //girilen email ve password ile post atıyoruz
      //console.log("LOGIN RESPONSE:", response.data);

      const { token, name, role_id } = response.data; //dönen responsetan ihtiyacımız olan değerleri alıyoruz

      if (rememberMe)
        localStorage.setItem("token", token); //rememberMe checked ise localStoragea tokenı kaydediyor yoksa siliyor
      else localStorage.removeItem("token");

      return {
        user: { name, email, role_id },
        token,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Email veya şifre hatalı",
      );
    }
  },
);
const initialState = {
  user: { name: null, email: null, role_id: null },
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        const errorMsg = action.payload; //error ile ilişkin detaylar action.error içerisinde bulunur ama rejectWithValue kullandığımız için error mesajı payload içerisindedir
        state.error = errorMsg;
      });
  },
});

export default userSlice.reducer;
