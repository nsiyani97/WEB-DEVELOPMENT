import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { allUser, newUser } from "../redux/action";

function Form() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.form.data);
  const userData = useSelector((state) => state.form.userData);
  function handleChange(e) {
    dispatch(newUser({ [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(allUser({ ...userData, id: Date.now() }));
    console.log(data);
  }

  return (
    <div>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <label htmlFor="name" />
        <input type="text" name="name" value={userData.name} id="name" onChange={handleChange} />
        <label htmlFor="tel" />
        <input type="tel" name="tel" value={userData.tel} id="tel" onChange={handleChange} />
        <label htmlFor="email" />
        <input type="email" name="email" value={userData.email} id="email" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
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
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.tel}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => editUser(item.id)}>Edit</button>
                  <button onClick={() => deleteUser(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Form;
