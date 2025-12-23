const KEY = "bookings";

export const loadBookings = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
};

export const saveBookings = (data) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};
