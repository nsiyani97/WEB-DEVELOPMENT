import React, { Component } from "react";

// Create a class component that fetches data from an API when the component mounts using componentDidMount(). Display the data in the component.

class Task1FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }

  componentDidMount() {
    // Example API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h2>Task 1: Fetch Data on Mount</h2>

        {loading ? (
          <p>Loading data...</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Task1FetchData;
