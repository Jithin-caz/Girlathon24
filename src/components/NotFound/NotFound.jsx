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
Puzzle 3: To find what lies beneath, know this:
      </p>
      <p style={{ fontSize: "1.1rem", color: "#aaa", marginTop: "2rem" }}>
7 and 5 stand beneath R      </p>
      <p style={{ fontSize: "1.1rem", color: "#aaa", marginTop: "2rem" }}>
6 hides under G
      </p>
      <p style={{ fontSize: "1.1rem", color: "#aaa", marginTop: "2rem" }}>
Use them where they belong — your key to unlock what the image does not show at first glance.
      </p>
    </div>
  );
};

export default NotFound;
