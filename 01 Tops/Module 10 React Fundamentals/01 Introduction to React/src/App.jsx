function App() {
  const userName = "Nikhil";
  const followers = 1500;

  return (
    <div>
      <h1>Welcome, {userName} 👋</h1>
      <p>Followers: {followers}</p>

      {followers > 1000 && <span>✔ Verified Creator</span>}
    </div>
  );
}

export default App;
