import React, { useState } from "react";
import { Collapse, Card, Button } from "react-bootstrap";
import "./FAQpage.css"; // Import your CSS file for styling

const FAQPage = () => {
  // State to track the open/closed state of each dropdown
  const [dropdownStates, setDropdownStates] = useState({});

  // Function to toggle the dropdown state for a given question
  const toggleDropdown = (question) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [question]: !prevStates[question],
    }));
  };

  // FAQ data - replace with your actual data
  const faqData = [
    {
      question: "Registration cost?",
      answer: "You can register for free.",
    },
    {
      question: "what is the criteria of participation?",
      answer: " You should identify as a woman.",
    },
    {
      question: "Can we register as a team?",
      answer: " You can register as a team of four members maximum.",
    },
    {
      question: "What is mode of hackathon?",
      answer: " Hybrid.The registration, abstract submission and project development will be held   online. The final presentation will take place offline.",
    },
    {
      question: "What is the time period of project development phase?",
      answer: "3 weeks.",
    },
    {
      question: "Is there any kind of support provided for project development?",
      answer:"Yes, mentors are allocated for each team  to provide guidance and support throughout the project development process.",
    },
   
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section
      style={{ position: "relative", overflow: "hidden", minHeight: "80dvh" }}
      id="FAQ"
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "2",
        }}
      >
        <h1 className="FAQ-bg-text" 
        >FAQ</h1>
      </div>
      <img
        style={{
          position: "absolute",
          height: "100%",
          opacity: ".6",
          width: "100%",
          zIndex: "2",
        }}
        src="images/backgroundAbstarct.png"
      />
      <div className="faq-container" style={{ marginTop: "3rem" }} >
        <h1 style={{ padding: "2rem", display: "none" }}>FAQs</h1>
        <div className="row"
         style={{ rowGap: "2rem", padding: "3rem" }}>
        <div className="col-lg-6 fade-up" data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
        <img
        style={{
         
          width: "100%",maxWidth:'35rem'
        }}
        src="images/faq2.png"
      />
        </div>
        <div className="col-lg-6 fade-up" style={{ zIndex: "5" }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
        {faqData.map((item, index) => (
            <div key={index} className="col-lg-12 fade-up" style={{ paddingBottom:'1.5rem' }}
            data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
              <Button
                className="drop-down-button"
                onClick={() => handleToggle(index)}
                aria-controls={`collapse-${index}`}
                aria-expanded={openIndex === index}
                style={{ background: "none", border: "white solid .1rem" }}
              >
                {item.question}
              </Button>
              <Collapse in={openIndex === index}>
                <div id={`collapse-${index}`}>
                  <Card style={{ height: "fit-content", width: "fit-content" }}>
                    <Card.Body>
                      <p>{item.answer}</p>
                    </Card.Body>
                  </Card>
                </div>
              </Collapse>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
