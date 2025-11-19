import React, { useState } from "react";

function ComplexState() {

  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  function updatefName (event) {
    const fistname = event.target.value;
    setfName(fistname)
  }
  function updatelName (event) {
    const lastname = event.target.value;
    setlName(lastname)
  }

  return (
    <div>
      <h1>Hello {fName} {lName}</h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={updatefName} value={fName} />
        <input name="lName" placeholder="Last Name" onChange={updatelName} value={lName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ComplexState;
