import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./IdeaSubmission.css";

export default function IdeaSubmission() {
  return (
    <section className="IdeaSubmission" style={{ paddingTop: "6rem" }}>
      <h2>Idea Submission</h2>
      <div className="SubmissionContent">
        <div className="IdeaTeamDetails">
          <div style={{ width: "80%", height: "80%" }}>
            <div class="idea-card">
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
          <form
            action=""
            className="IdeaSubmissionForm"
            onSubmit={IdeaSubmission}
          >
            <input
              placeholder="Idea Title"
              type="text"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            {/* <label className="inputlabel">Select Category</label> */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input"
              style={{ width: "100%" }}
              required
            >
              <option className="dropdown-option" value="">
                -- Select Category --
              </option>
              <option className="dropdown-option" value="Health Care">
                Health Care
              </option>
              <option className="dropdown-option" value="Transportation">
                Transportation
              </option>
              <option className="dropdown-option" value="Social Stigma">
                Social Stigma
              </option>
              <option className="dropdown-option" value="Waste Management">
                Waste Management
              </option>
              <option className="dropdown-option" value="Blockchain">
                Blockchain
              </option>
              <option className="dropdown-option" value="Communication">
                Communication
              </option>
              <option
                className="dropdown-option"
                value="Environment & Agriculture"
              >
                Environment & Agriculture
              </option>
              <option className="dropdown-option" value="Security">
                Security
              </option>
              <option className="dropdown-option" value="Renewable Energy">
                Renewable Energy
              </option>
              <option className="dropdown-option" value="Disaster Management">
                Disaster Management
              </option>
              <option className="dropdown-option" value="Open Innovation">
                Open Innovation
              </option>
            </select>
            <textarea
              placeholder="Idea Description"
              type="text"
              className="input textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <textarea
              placeholder="Abstract (should be below 100MB)"
              type="text"
              className="input textarea"
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              required
            />
            {/* <div>
              <label className="inputlabel">
                Other Documents <span>(should be below 50MB)</span>
              </label>
              <input type="file" className="input" required />
            </div> */}
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
          <div style={{ paddingTop: "1rem" }}>
            <NavLink to="/resetPassword">
              <u style={{ color: "yellow" }}> reset password</u>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
