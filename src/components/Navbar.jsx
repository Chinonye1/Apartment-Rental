import logo from "../assets/logo.jpg";


export function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <h1>Holiday Comfort Homes</h1>
        <p>Find your next stay in minutes</p>
      </div>
      <img src={logo} alt="Holiday Comfort Homes logo" className="logo" />
    </header>
  );
}
