import { Link } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>My App</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="link">Home</Link>
          <Link to="/users" className="link">Users</Link>
          <Link to="/about" className="link">About</Link>
          <Link to="/admin" className="link">Admin</Link>
          <Link to="/login" className="link">Login</Link>

        </nav>
      </div>
    </header>
  );
}
