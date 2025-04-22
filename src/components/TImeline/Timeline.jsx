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
          date="20th May 2025"
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
          date="10th June 2025"
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
          date="31st May 2025"
        >
          <h3 className="timeline-heading">
            Announcement of Shortlisted participants stage 1
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
          date="15th June 2025"
        >
          <h3 className="timeline-heading">Announcement of Shortlisted participants stage 2</h3>
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
          date="1st June 2025"
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
          date="21tst July 2025"
        >
          <h3 className="timeline-heading">Final shortlisting</h3>
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
          date="26th July 2025"
        >
          <h3 className="timeline-heading">
            Final Event Day with project presentation and talk sessions
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
