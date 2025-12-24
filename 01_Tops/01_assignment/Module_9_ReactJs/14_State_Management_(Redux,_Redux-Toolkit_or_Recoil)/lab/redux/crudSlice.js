import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crud",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    updateItem: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index] = action.payload;
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, deleteItem } = crudSlice.actions;
export default crudSlice.reducer;
