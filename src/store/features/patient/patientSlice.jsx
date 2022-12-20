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

export const getPatientsById = createAsyncThunk(
  "fetch/patientsById",
  async (id) => {
    try {
      const response = await APIPatient.getPatientsById(id);
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

export const editPatient = createAsyncThunk("edit/patient", async (data) => {
  try {
    const response = await APIPatient.editPatient(data);
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
      .addCase(getPatientsById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPatientsById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getPatientsById.rejected, (state, action) => {
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
      })
      .addCase(editPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(editPatient.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default patientsSlice.reducer;
