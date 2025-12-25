import { Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import UserDetail from "./pages/UserDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
