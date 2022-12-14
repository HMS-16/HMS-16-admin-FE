import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth/authSlicer";
import doctorsSlice from "./doctor/doctorsSlice";

export const rootReducer = combineReducers({
  auth,
  doctors: doctorsSlice,
});
