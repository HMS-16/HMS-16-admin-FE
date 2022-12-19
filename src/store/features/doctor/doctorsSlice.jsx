import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIDoctor from "../../../apis/doctor.api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getDoctor = createAsyncThunk("fetch/doctors", async () => {
  try {
    const response = await APIDoctor.getDoctor();
    return response;
  } catch (err) {
    console.log(err);
  }
});

export const getDoctorById = createAsyncThunk("fetch/doctorById", async (str_num) => {
  try {
    const response = await APIDoctor.getDoctorById(str_num);
    return response;
  } catch (err) {
    console.log(err);
  }
});

export const addDoctor = createAsyncThunk("add/doctor", async (data) => {
  try {
    const response = await APIDoctor.addDoctor(data);
    return response;
  } catch (err) {
    console.log(err);
  }
});

export const deleteDoctor = createAsyncThunk("delete/doctor", async (str_num) => {
  try {
    const response = await APIDoctor.deleteDoctor(str_num);
    return response;
  } catch (err) {
    console.log(err);
  }
});

export const editDoctor = createAsyncThunk("edit/doctor", async (data) => {
  try {
    const response = await APIDoctor.editDoctor(data);
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
      })
      .addCase(addDoctor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addDoctor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(addDoctor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteDoctor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteDoctor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(editDoctor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editDoctor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(editDoctor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default doctorsSlice.reducer;
