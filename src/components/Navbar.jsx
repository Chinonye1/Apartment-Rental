import logo from "../assets/logo.jpg";
export function Navbar() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <h3 style={{ color: "darkblue" }}>Holiday Comfort Homes</h3>

        <img src={logo} alt="logo-image" style={{ width: 60, height: 50 }} />
      </div>
    </>
  );
}
