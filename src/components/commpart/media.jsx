import React from "react";

export default function Media() {
  return (
    <section className="media-part p-5" style={{ minHeight: "40dvh" }}>
      <div>
        <h1>Previous Media Partner</h1>
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
          <div className="sponser media-card">
            <a
              href="https://www.mediaoneonline.com/"
              target="_blank"
              className="card1"
            >
              <img src='images/media_one.png' style={{ width: '100%' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
