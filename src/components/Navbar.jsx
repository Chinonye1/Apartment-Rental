import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <h1>Holiday Comfort Homes</h1>
        <p>Find your next stay in minutes</p>
      </div>
      <div className="navbar-actions">
        <Link to="/dashboard" className="create-link">
          Create apartment
        </Link>
        <img src={logo} alt="Holiday Comfort Homes logo" className="logo" />
      </div>
    </header>
  );
}
