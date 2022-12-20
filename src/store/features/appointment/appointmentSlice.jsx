import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIAppointment from "../../../apis/appointment.api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getAppointment = createAsyncThunk(
  "fetch/appointment",
  async () => {
    try {
      const response = await APIAppointment.getAppointment();
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getAppointmentById = createAsyncThunk(
  "fetch/appointmentById",
  async (str_num) => {
    try {
      const response = await APIAppointment.getAppointmentById(str_num);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addAppointment = createAsyncThunk(
  "add/appointment",
  async (data) => {
    try {
      const response = await APIAppointment.addAppointment(data);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getAppointment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAppointment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAppointment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getAppointmentById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAppointmentById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAppointmentById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addAppointment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addAppointment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(addAppointment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default appointmentsSlice.reducer;
