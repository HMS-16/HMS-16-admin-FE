import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth/authSlicer";
import doctorsSlice from "./doctor/doctorsSlice";
import patientSlice from "./patient/patientSlice";
import appointmentSlice from "./appointment/appointmentSlice";

export const rootReducer = combineReducers({
  auth,
  doctors: doctorsSlice,
  patients: patientSlice,
  appointments: appointmentSlice,
});
