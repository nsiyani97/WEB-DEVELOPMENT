import React from "react";

function User() {
  return (
    <div>
      <form>
        <input placeholder="name"/>
        <input placeholder="age" />
        <input placeholder="salary" />
        <button>Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>slary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>nikhil</td>
            <td>27</td>
            <td>30000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default User;
