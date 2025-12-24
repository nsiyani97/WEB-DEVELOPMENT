import React from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackTable from "./features/feedback/FeedbackTable";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBookings } from "./features/feedback/feedbackSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookings());
  }, []);

  return (
    <>
      <h2>Hotel Feedback</h2>
      <FeedbackForm />
      <FeedbackTable />
    </>
  );
}
