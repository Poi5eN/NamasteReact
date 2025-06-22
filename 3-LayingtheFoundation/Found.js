import React from "react";
import ReactDOM from "react-dom/client";

// Using React Element
// const heading = React.createElement("h1", {
//     className: "heading",
// }, "Laying the Foundation!")

// console.log(heading);

// Using JSX
// Note: JSX is HTML-like code in JavaScript not Pure JS.

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1 className="heading">Laying the Foundation with JSX!</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
