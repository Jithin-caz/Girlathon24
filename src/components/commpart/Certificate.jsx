import React from "react";

export default function Certificate() {
  return (
    <section className="certi-part p-5" style={{ minHeight: "40dvh" }}>
      <div>
        <h1>Certificate Partner</h1>
      </div>
      <div
        style={{
          width: "100%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "25px",
        }}
      >
        <div>
          <div className="sponser certi-card">
            <a
              href="https://pindown.app/"
              target="_blank"
              className="card1"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}
