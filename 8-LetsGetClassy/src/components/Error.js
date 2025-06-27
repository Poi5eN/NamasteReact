import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const errorMessage = error?.message || "An unknown error occurred.";

  return (
    <div style={{
      maxWidth: "600px",
      margin: "50px auto",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      color: "#333",
    }}>
      <h1 style={{ color: "#c0392b" }}>Something went wrong!</h1>
      <p style={{ fontSize: "16px", color: "#666" }}>{errorMessage}</p>
      <p style={{ fontSize: "14px" }}>Please try again later or contact support.</p>
      <a
        href="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#3498db",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "4px",
        }}
      >
        Back to Home
      </a>
    </div>
  );
};

export default Error;