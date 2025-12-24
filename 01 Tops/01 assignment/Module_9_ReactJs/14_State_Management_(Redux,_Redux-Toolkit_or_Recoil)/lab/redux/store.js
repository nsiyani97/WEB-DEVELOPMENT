import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import crudReducer from "./crudSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer, // Task 1
    crud: crudReducer, // Task 3
  },
});

export default store;
