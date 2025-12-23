import { Field, Form, Formik, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const FormikExample = () => {
  const userSchema = Yup.object({
    username: Yup.string().required("Username is required.."),
    age: Yup.number().typeError("Age must be a number").required("Age is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
  });
  const [alldata, setAllData] = useState([]);
  const [id, setId] = useState("");
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          username: id !== "" ? alldata[id].username : "",
          age: id !== "" ? alldata[id].age : "",
          email: id !== "" ? alldata[id].email : "",
          allData: [],
        }}
        validationSchema={userSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("task added", values);
          if (id !== "") {
            let newData = [...alldata]; //5
            newData[id] = values; //2 updated
            setAllData(newData);
          } else {
            setAllData([...alldata, values]);
          }
          setId("");
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="">Name:</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" className="error" />
          <br />
          <label htmlFor="">Age:</label>
          <Field type="number" name="age" />
          <ErrorMessage name="age" component="div" className="error" />
          <br />
          <label htmlFor="">Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" /> <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <br />
      <hr />
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((u, index) => (
            <tr key={index}>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.age}</td>
              <td>
                <button onClick={() => setId(index)}>Edit</button>
                <button onClick={() => setAllData(alldata.filter((_, i) => i !== index))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormikExample;
