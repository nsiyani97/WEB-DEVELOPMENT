import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3334/bookings";

export const fetchBookings = createAsyncThunk("bookings/fetchAll", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addBooking = createAsyncThunk("bookings/add", async (newData) => {
  const response = await axios.post(API_URL, newData);
  return response.data;
});

export const deleteBooking = createAsyncThunk("bookings/delete", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default feedbackSlice.reducer;
