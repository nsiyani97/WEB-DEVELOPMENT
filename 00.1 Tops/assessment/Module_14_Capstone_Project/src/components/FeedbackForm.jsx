import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "../features/feedback/feedbackSlice";
import { validate } from "../utils/validation";

export default function FeedbackForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    comment: "",
    rating: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const submit = (e) => {
    e.preventDefault();
    const err = validate(form);
    if (Object.keys(err).length) return setErrors(err);

    dispatch(addBooking(form));
    setForm({ name: "", phone: "", comment: "", rating: "" });
  };

  return (
    <form onSubmit={submit}>
      <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
      <p className="error">{errors.name}</p>

      <input name="phone" placeholder="Phone No" value={form.phone} onChange={handleChange} />
      <p className="error">{errors.phone}</p>

      <textarea name="comment" placeholder="Feedback" value={form.comment} onChange={handleChange} />
      <p className="error">{errors.comment}</p>

      <select name="rating" value={form.rating} onChange={handleChange}>
        <option value="">Rating</option>
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r}>{r}</option>
        ))}
      </select>
      <p className="error">{errors.rating}</p>

      <button>Submit</button>
    </form>
  );
}
