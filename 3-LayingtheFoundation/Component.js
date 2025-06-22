import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement(
  "h1",
  {
    className: "heading",
  },
  "Laying the Foundation!"
);

// JSX Element
const jsxHeading = <h1 className="heading">Laying the Foundation with JSX!</h1>;
console.log(jsxHeading);

const Title = () => {
  return <h1 className="heading">Laying the Foundation Title!</h1>;
};

const data = "Laying the Foundation with Data!";

// React Functional Component
const HeadingComponent = () => {
  return (
    <div className="container">
      {"HERE WE GO!"}
      {data}
      {10 + 20}

      <Title />
      <Title></Title>
      {Title()}
      {jsxHeading}
      <h2>{console.log("JSX Element:", jsxHeading)}</h2>
      Laying the Foundation with Functional Component!
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
