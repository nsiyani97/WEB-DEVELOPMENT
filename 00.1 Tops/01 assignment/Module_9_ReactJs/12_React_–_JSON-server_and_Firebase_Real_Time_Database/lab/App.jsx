import UsersTable from "./UsersTable";
import JsonServerCrud from "./JsonServerCrud";
import FirebaseAuth from "./FirebaseAuth";

function App() {
  return (
    <div>
      <UsersTable />
      <hr />
      <JsonServerCrud />
      <hr />
      <FirebaseAuth />
    </div>
  );
}

export default App;
