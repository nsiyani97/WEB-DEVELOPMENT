import axios from "axios";
import { useEffect, useState } from "react";

const ApiCrudExample = () => {
  // 1. Main form data
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });

  // 2. All users data
  const [alldata, setAlldata] = useState([]);

  // 3. For edit mode
  const [id, setId] = useState("");

  // 5. Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // 7. Save data
  const saveData = (e) => {
    e.preventDefault();

    // If id present → update
    if (id !== "") {
      axios.put(`http://localhost:3000/users/${id}`, data).then(() => {
        console.log("Updated");
        disp();
      });
    } else {
      // 7a. else → insert
      axios.post("http://localhost:3000/users", data).then(() => {
        console.log("Inserted");
        disp();
      });
    }

    // reset form
    setData({ name: "", age: "", salary: "" });
    setId("");
  };

  // 8. Display function
  const disp = () => {
    axios.get("http://localhost:3000/users").then((res) => setAlldata(res.data));
  };

  // Load data only once when page loads
  useEffect(() => {
    disp();
  }, []);

  // Delete Data
  const delData = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`).then(() => {
      console.log("Deleted");
      disp();
    });
  };

  // Edit Data
  const editData = (id) => {
    axios.get(`http://localhost:3000/users/${id}`).then((res) => {
      setData(res.data);
      setId(id);
    });
  };

  return (
    <div>
      <h3>Api CRUD Example</h3>

      {/* 4. Form */}
      <form onSubmit={saveData}>
        Name:
        <input type="text" name="name" value={data.name} onChange={handleChange} />
        <br />
        <br />
        Age:
        <input type="number" name="age" value={data.age} onChange={handleChange} />
        <br />
        <br />
        Salary:
        <input type="number" name="salary" value={data.salary} onChange={handleChange} />
        <br />
        <br />
        <input type="submit" value="Save" />
      </form>

      <br />
      <br />

      {/* Table */}
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {alldata.map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.age}</td>
              <td>{i.salary}</td>
              <td>
                <button onClick={() => editData(i.id)}>Edit</button>
                <button onClick={() => delData(i.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ApiCrudExample;
