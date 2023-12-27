import React, { useState } from "react";
import "./IdeaSubmission.css";

export default function IdeaSubmission() {
  return (
    <section className="IdeaSubmission">
      <h2>Idea Submission</h2>
      <div className="SubmissionContent">
        <div className="IdeaTeamDetails">
          <div style={{ width: "80%", height: "80%" }}>
            <div class="card">
              <div class="first-content">
                <h5>Team Name</h5>
                <p>**Team Name**</p>
              </div>
              <div class="second-content">
                <h5>Team Members</h5>
                <p>**Member 1**</p>
                <p>**Member 2**</p>
                <p>**Member 3**</p>
                <p>**Member 4**</p>
              </div>
            </div>
          </div>
        </div>
        <div className="SubmissionDiv">
          <form action="" className="IdeaSubmissionForm">
            <input
              placeholder="Idea Title"
              type="text"
              className="input"
              required
            />
            <textarea
              placeholder="Idea Description"
              type="text"
              className="input textarea"
              required
            />
            <div>
              <label className="inputlabel">
                Abstract <span>(should be below 100MB)</span>
              </label>
              <input type="file" className="input" required />
            </div>
            <div>
              <label className="inputlabel">
                Other Documents <span>(should be below 50MB)</span>
              </label>
              <input type="file" className="input" required />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
