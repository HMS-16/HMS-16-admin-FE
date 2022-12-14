import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth/authSlicer";

export const rootReducer = combineReducers({
  auth,
});
