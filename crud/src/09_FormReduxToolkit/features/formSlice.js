import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],      // list of objects
  editUser: null, // store object to edit
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // add new user object
      state.users.push(action.payload);
    },

    deleteUser: (state, action) => {
      // remove filtered user
      state.users = state.users.filter((u) => u.id !== action.payload);
    },

    setEditUser: (state, action) => {
      // when user clicks EDIT button
      state.editUser = action.payload;
    },

    updateUser: (state, action) => {
      // update user data
      state.users = state.users.map((u) =>
        u.id === action.payload.id ? action.payload : u
      );
      state.editUser = null; // clear edit mode
    },
  },
});

export const { addUser, deleteUser, setEditUser, updateUser } =
  formSlice.actions;

export default formSlice.reducer;
