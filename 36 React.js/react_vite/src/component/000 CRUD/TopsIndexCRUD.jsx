import React, { useState } from "react";

const EmpComponent = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });

  const [alldata, setAllData] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const saveData = (e) => {
    e.preventDefault();

    if (editId !== null) {
      const updated = alldata.map((item, index) => (index === editId ? data : item));
      setAllData(updated);
    } else {
      setAllData([...alldata, data]);
    }

    setData({
      name: "",
      age: "",
      salary: "",
    });
  };

  const handleDelete = (id) => {
    const filtered = alldata.filter((item, index) => index !== id);
    setAllData(filtered);
    setData({
      name: "",
      age: "",
      salary: "",
    });
  };

  const handleEdit = (id) => {
    setEditId(id);
  };

  return (
    <div>
      <h3>Employee Add</h3>

      <form onSubmit={saveData}>
        <label>Name:</label>
        <input type="text" name="name" value={data.name} onChange={handleChange} />
        <br />
        <br />

        <label>Age:</label>
        <input type="number" name="age" value={data.age} onChange={handleChange} />
        <br />
        <br />

        <label>Salary:</label>
        <input type="number" name="salary" value={data.salary} onChange={handleChange} />
        <br />
        <br />

        <input type="submit" value={editId !== null ? "Update Data" : "Save Data"} />
      </form>

      <br />

      <table border="2">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.salary}</td>

              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>

              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpComponent;
