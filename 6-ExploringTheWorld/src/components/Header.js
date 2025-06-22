import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [reactBtn, setReactBtn] = useState("Login");

  console.log("Header Renders");

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>Cart</li>
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
