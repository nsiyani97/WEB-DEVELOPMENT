import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedData({
      name,
      email,
      age,
    });

    setName("");
    setEmail("");
    setAge("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label>Age: </label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
}

export default App;
