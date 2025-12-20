import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadBookings, saveBookings } from "../../utils/localStorage";

const API = "http://localhost:3334/bookings";

export const fetchBookings = createAsyncThunk("feedback/fetch", async (_, { rejectWithValue }) => {
  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    saveBookings(data);
    return data;
  } catch (err) {
    return rejectWithValue(loadBookings());
  }
});

export const addBooking = createAsyncThunk("feedback/add", async (payload, { getState }) => {
  try {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("API error");
    return await res.json();
  } catch {
    return { ...payload, id: Date.now() };
  }
});

export const deleteBooking = createAsyncThunk("feedback/delete", async (id) => {
  try {
    await fetch(`${API}/${id}`, { method: "DELETE" });
  } catch {}
  return id;
});

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    items: loadBookings(),
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.items = action.payload;
        saveBookings(state.items);
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.items = action.payload;
      })

      .addCase(addBooking.fulfilled, (state, action) => {
        state.items.push(action.payload);
        saveBookings(state.items);
      })

      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.items = state.items.filter((i) => i.id !== action.payload);
        saveBookings(state.items);
      });
  },
});

export default feedbackSlice.reducer;
