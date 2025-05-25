import React from "react";

const NotFound = () => {
  return (
    <div style={{
      height: "100vh",
      backgroundColor: "#1a1a1a",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Montserrat, sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "4rem" }}>Error 404</h1>
      <p style={{ fontSize: "1.5rem" }}>Page not found.</p>
      <p style={{ fontSize: "1.1rem", color: "#aaa", marginTop: "2rem" }}>
        Try rearranging to [5, 14, 17, 22, 0, 17, 3]
      </p>
    </div>
  );
};

export default NotFound;
