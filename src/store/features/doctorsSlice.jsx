import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIDoctor from "../../apis/doctor.api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getDoctor = createAsyncThunk("fetch/getDoctor", async () => {
  try {
    const response = await APIDoctor.getDoctor();
    return response;
  } catch (err) {
    console.log(err);
  }
});

export const getDoctorById = createAsyncThunk("fetch/getDoctorById", async (id) => {
  try {
    const response = await APIDoctor.getDoctorById(id);
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
      .addCase(getDoctor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDoctor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getDoctor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getDoctorById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDoctorById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getDoctorById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default doctorsSlice.reducer;
