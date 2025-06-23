import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [reactBtn, setReactBtn] = useState("Login");

  console.log("Header Renders");


  // No dependency => Called every time the component renders.
  // Empty dependency array => Called only once when the component mounts.
  // [reactBtn] => Called every time the reactBtn state changes.
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          {/* Never Use a tag as it always reload and use LINK */}
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">Cart</Link>
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                setReactBtn(reactBtn === "Login" ? "Logout" : "Login");
              }}
            >
              {reactBtn}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
