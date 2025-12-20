import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookings, deleteBooking } from "../store/feedbackSlice";

const FeedbackTable = () => {
  const { items } = useSelector((state) => state.feedback);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Confirm delete this record?")) {
      dispatch(deleteBooking(id));
    }
  };

  const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="card shadow-sm">
      <div className="card-header d-flex justify-content-between align-items-center bg-white py-3">
        <h5 className="mb-0 fw-light">Feedback Records</h5>
        <input type="text" className="form-control w-25" placeholder="Search by name..." onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className="table-responsive">
        <table className="table align-middle mb-0">
          <thead className="table-light small text-uppercase">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Comment</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.comment}</td>
                  <td>
                    <span className="badge bg-warning text-dark">{item.rating} ★</span>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(item.id)} className="btn btn-sm btn-outline-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-5 text-muted">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedbackTable;
