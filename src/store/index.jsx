import { combineReducers, configureStore } from "@reduxjs/toolkit";
import doctorsSlice from "./features/doctorsSlice";

const reducer = combineReducers({
  doctors: doctorsSlice,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
