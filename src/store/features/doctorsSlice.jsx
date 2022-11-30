import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIDoctor from "../../apis/doctor.api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchDoctor = createAsyncThunk("fetch/fetchDoctor", async () => {
  try {
    const response = await APIDoctor.getDoctor();
    return response;
  } catch (err) {
    console.log(err);
  }
});

const doctorsSlice = createSlice({
  name: "doctors",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchDoctor.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDoctor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchDoctor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default doctorsSlice.reducer;
