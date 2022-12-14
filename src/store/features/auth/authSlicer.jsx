import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import APIAuth from "../../../apis/authlogin.api";

const initialState = {
  data: [],
  status: false,
  fecthStatus: "idle",
  error: null,
};

export const fetchAuth = createAsyncThunk("authLogin", async (data) => {
  try {
    const response = await APIAuth.login(data);
    // console.log(response);
    Cookies.set("token", response.data.token);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.data = action.payload;
      state.fecthStatus = "success";
    });
  },
});
export default authSlice.reducer;
