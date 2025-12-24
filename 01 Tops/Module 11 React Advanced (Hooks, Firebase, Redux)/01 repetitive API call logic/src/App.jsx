import Users from "./components/Users";
import Posts from "./components/Posts";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Advanced React Dashboard</h1>
      <Users />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
