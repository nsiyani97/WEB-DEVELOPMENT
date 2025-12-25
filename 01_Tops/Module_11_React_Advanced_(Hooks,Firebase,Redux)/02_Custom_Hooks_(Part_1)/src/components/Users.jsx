import useFetchData from "../hooks/useFetchData";

const Users = () => {
  const { data, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Users</h2>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
