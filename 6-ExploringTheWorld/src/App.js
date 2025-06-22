import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";




const styledCard = {
  backgroundColor: "#f8f8f8",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "16px",
  margin: "16px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  width: "200px",
  fontFamily: "Arial, sans-serif",
  color: "#333",
  transition: "transform 0.2s",
  cursor: "pointer",
};


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
