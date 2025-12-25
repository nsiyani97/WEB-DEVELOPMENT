import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "15px" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
          })}
        >
          About
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
