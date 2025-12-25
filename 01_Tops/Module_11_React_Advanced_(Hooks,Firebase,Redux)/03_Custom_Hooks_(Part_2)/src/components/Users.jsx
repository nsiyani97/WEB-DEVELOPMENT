import useFetchData from "../hooks/useFetchData";

function Users() {
  const { data: users, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul>{users && users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}

export default Users;
