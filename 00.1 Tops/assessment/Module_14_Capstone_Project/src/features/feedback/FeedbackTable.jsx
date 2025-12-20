import { useSelector, useDispatch } from "react-redux";
import { deleteBooking } from "./feedbackSlice";
import { useState } from "react";

export default function FeedbackTable() {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.feedback.items);
  const [search, setSearch] = useState("");

  const filtered = items.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <input placeholder="Search by Name" value={search} onChange={(e) => setSearch(e.target.value)} />

      {filtered.length === 0 ? (
        <p>No records found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Comment</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((i) => (
              <tr key={i.id}>
                <td>{i.name}</td>
                <td>{i.phone}</td>
                <td>{i.comment}</td>
                <td>{i.rating}</td>
                <td>
                  <button
                    onClick={() => {
                      if (window.confirm("Delete this feedback?")) dispatch(deleteBooking(i.id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
