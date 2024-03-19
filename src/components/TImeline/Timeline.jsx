import React from "react";
import "./tImeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  return (
    <div className="Timeline">
      <h1>Timeline</h1>
      <VerticalTimeline lineColor="#0057E7">
        <VerticalTimelineElement
          className="vertical-timeline-element--registration"
          contentStyle={{
            background: "#f2f2f200",
            border: "2px solid white",
            borderRadius: "20px",
          }}
          contentArrowStyle={{ borderRight: "10px solid white" }}
          iconStyle={{ background: "#0057E7" }}
          icon={
            <img
              src="/images/idea.png"
              alt="Icon"
              style={{ width: "100%", height: "110%" }}
            />
          }
          date="11th February 2024"
        >
          <h3 className="timeline-heading">
            Registration and Idea Submission Starts
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--registration"
          contentStyle={{
            background: "#f2f2f200",
            border: "2px solid white",
            borderRadius: "20px",
          }}
          contentArrowStyle={{ borderRight: "10px solid white" }}
          iconStyle={{ background: "#0057E7" }}
          icon={
            <img
              src="/images/close.png"
              alt="Icon"
              style={{ width: "80%", height: "80%", paddingLeft: ".3rem" }}
            />
          }
          date="7th March 2024"
        >
          <h3 className="timeline-heading">Registration closes</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--registration"
          contentStyle={{
            background: "#f2f2f200",
            border: "2px solid white",
            borderRadius: "20px",
          }}
          contentArrowStyle={{ borderRight: "10px solid white" }}
          iconStyle={{
            background: "#0057E7",
          }}
          icon={
            <img src="/images/anoun.png" alt="Icon" style={{ width: "100%" }} />
          }
          date="12th March 2024"
        >
          <h3 className="timeline-heading">
            Announcement of Shortlisted participants
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--registration"
          contentStyle={{
            background: "#f2f2f200",
            border: "2px solid white",
            borderRadius: "20px",
          }}
          contentArrowStyle={{ borderRight: "10px solid white" }}
          iconStyle={{ background: "#0057E7" }}
          icon={
            <img
              src="/images/mentor.png"
              alt="Icon"
              style={{ width: "90%", height: "80%" }}
            />
          }
          date="14th March 2024"
        >
          <h3 className="timeline-heading">Allocation of mentors</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--registration"
          contentStyle={{
            background: "#f2f2f200",
            border: "2px solid white",
            borderRadius: "20px",
          }}
          contentArrowStyle={{ borderRight: "10px solid white" }}
          iconStyle={{ background: "#0057E7" }}
          icon={
            <img src="/images/net.png" alt="Icon" style={{ width: "100%" }} />
          }
          date="16th March 2024"
        >
          <h3 className="timeline-heading">Online Development Phase Begins</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--registration"
          contentStyle={{
            background: "#f2f2f200",
            border: "2px solid white",
            borderRadius: "20px",
          }}
          contentArrowStyle={{ borderRight: "10px solid white" }}
          iconStyle={{ background: "#0057E7" }}
          icon={
            <img
              src="/images/reg.png"
              alt="Icon"
              style={{ width: "90%", height: "100%", paddingLeft: ".3rem" }}
            />
          }
          date="4th April 2024"
        >
          <h3 className="timeline-heading">Second round of shortlisting</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--registration"
          contentStyle={{
            background: "#f2f2f200",
            border: "2px solid white",
            borderRadius: "20px",
          }}
          contentArrowStyle={{ borderRight: "10px solid white" }}
          iconStyle={{ background: "#0057E7" }}
          icon={
            <img src="/images/pres.png" alt="Icon" style={{ width: "100%" }} />
          }
          date="6th April 2024"
        >
          <h3 className="timeline-heading">
            Final Event Day with project presentation and talk sessions
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
