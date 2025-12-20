import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "../store/feedbackSlice";

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "", rating: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (formData.name.length < 3) newErrors.name = "Name must be >= 3 characters.";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be exactly 10 digits.";
    if (formData.comment.length < 5) newErrors.comment = "Comment is too short.";
    if (!formData.rating || formData.rating < 1 || formData.rating > 5) newErrors.rating = "Rating must be 1-5.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(addBooking(formData));
      setFormData({ name: "", phone: "", comment: "", rating: "" });
      alert("Feedback submitted successfully!");
    }
  };

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h5 className="mb-3 fw-light">Hotel Booking Feedback</h5>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label small">FULL NAME</label>
            <input type="text" className={`form-control ${errors.name ? "is-invalid" : ""}`} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <div className="invalid-feedback">{errors.name}</div>
          </div>
          <div className="col-md-6">
            <label className="form-label small">PHONE NO</label>
            <input type="number" className={`form-control ${errors.phone ? "is-invalid" : ""}`} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            <div className="invalid-feedback">{errors.phone}</div>
          </div>
          <div className="col-md-8">
            <label className="form-label small">FEEDBACK COMMENT</label>
            <textarea className={`form-control ${errors.comment ? "is-invalid" : ""}`} value={formData.comment} onChange={(e) => setFormData({ ...formData, comment: e.target.value })} />
            <div className="invalid-feedback">{errors.comment}</div>
          </div>
          <div className="col-md-4">
            <label className="form-label small">RATING (1-5)</label>
            <input type="number" className={`form-control ${errors.rating ? "is-invalid" : ""}`} value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: e.target.value })} />
            <div className="invalid-feedback">{errors.rating}</div>
          </div>
          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-dark w-100">
              Submit Feedback
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
