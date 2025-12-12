import React, { useEffect, useReducer } from "react";

// 1️ Initial State: holds all app state in one object
const initialState = {
  data: [], // array to store user records
  editId: null, // holds id of user being edited (null if adding new)
  userData: { name: "", tel: "", email: "" }, // form input values
};

// 2️ Reducer Function: handles all state changes based on action.type
function reducer(state, action) {
  switch (action.type) {

    // 2.1️ Update input fields when user types in form
    case "SET_FIELD":
      return {
        ...state,
        userData: {
          ...state.userData,
          [action.name]: action.value, // update specific input field
        },
      };

    // 2.2️ Add new user to data array
    case "ADD_USER":
      return {
        ...state,
        data: [
          ...state.data,
          { ...state.userData, id: Date.now() % 10000 }, // create unique id
        ],
        userData: { name: "", tel: "", email: "" }, // reset form after submit
      };

    // 2.3️ Edit existing user
    case "EDIT_USER":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === state.editId ? { ...state.userData, id: state.editId } : item
        ),
        editId: null, // reset editId after updating
        userData: { name: "", tel: "", email: "" }, // clear form
      };

    // 2.4️ Set editId and pre-fill form when clicking Edit button
    case "SET_EDIT":
      const { id } = action;
      const userToEdit = state.data.find((item) => item.id === id);
      return {
        ...state,
        editId: id, // mark which user is being edited
        userData: { name: userToEdit.name, tel: userToEdit.tel, email: userToEdit.email }, // fill form
      };

    // 2.5️ Delete user by filtering them out of data array
    case "DELETE_USER":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.id),
      };

    // 2.6️ Load data from localStorage when app first loads
    case "LOAD_DATA":
      return { ...state, data: action.payload };

    // Default: return current state if action type not recognized
    default:
      return state;
  }
}

function App() {
  // 3️ useReducer hook: state and dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  // 4️ Load data from localStorage on first render
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("data")) || [];
    dispatch({ type: "LOAD_DATA", payload: saved });
  }, []);

  // 5️ Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state.data));
  }, [state.data]);

  // 6️ Handle input changes: update userData in state
  function handleChange(e) {
    dispatch({ type: "SET_FIELD", name: e.target.name, value: e.target.value });
  }

  // 7️ Handle form submit: add or edit user
  function handleSubmit(e) {
    e.preventDefault();
    if (state.editId != null) {
      // 7.1️ If editId exists, update existing user
      dispatch({ type: "EDIT_USER" });
    } else {
      // 7.2️ Otherwise, add new user
      dispatch({ type: "ADD_USER" });
    }
  }

  return (
    <div>
      <h2>CRUD Form with useReducer</h2>

      {/* 8️ Form: controlled inputs */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.userData.name}
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="tel"
          value={state.userData.tel}
          placeholder="Phone"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={state.userData.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {/* 9️ Table: display data */}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Tel</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* 10 Map through data array to display each user */}
          {state.data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.tel}</td>
              <td>{item.email}</td>
              <td>
                {/* 11️ Edit button: sets editId and pre-fills form */}
                <button onClick={() => dispatch({ type: "SET_EDIT", id: item.id })}>Edit</button>

                {/* 12️ Delete button: removes user */}
                <button onClick={() => dispatch({ type: "DELETE_USER", id: item.id })}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
