import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIPatient from "../../../apis/patient.api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getPatient = createAsyncThunk("fetch/patients", async () => {
  try {
    const response = await APIPatient.getPatient();
    return response;
  } catch (err) {
    console.log(err);
  }
});

export const getPatientById = createAsyncThunk(
  "fetch/patientsById",
  async (str_num) => {
    try {
      const response = await APIPatient.getPatientById(str_num);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addPatient = createAsyncThunk("add/patient", async (data) => {
  try {
    const response = await APIPatient.addPatient(data);
    return response;
  } catch (err) {
    console.log(err);
  }
});

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getPatient.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getPatientById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPatientById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getPatientById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(addPatient.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default patientsSlice.reducer;
