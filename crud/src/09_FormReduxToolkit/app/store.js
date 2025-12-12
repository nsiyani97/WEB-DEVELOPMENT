import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/formSlice";

export const store = configureStore({
  reducer: {
    form: formReducer, // register slice
  },
});
