import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  const [reactBtn, setReactBtn] = useState("Login");

  console.log("Header Renders");

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo-link">
        <img className="logo" src={LOGO_URL} alt="Logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <span className="online-status">
              {useOnlineStatus() ? "🟢" : "🔴"}
            </span>
          </li>
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
            <Link to="/grocery" className="nav-link">Grocery</Link>
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
