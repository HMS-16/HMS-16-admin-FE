import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth/authSlicer";
import doctorsSlice from "./doctor/doctorsSlice";
import patientsSlice from "./patients/patientsSlice";

export const rootReducer = combineReducers({
  auth,
  doctors: doctorsSlice,
  patients: patientsSlice,
});
