import React, { useState } from 'react';
import {Collapse,Card,Button} from 'react-bootstrap'
import './FAQpage.css'; // Import your CSS file for styling

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
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'How do I install React?',
      answer: 'You can install React using npm by running: npm install react',
    },
    {
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript recommended by React.',
    },
    {
      question: 'How do React components communicate?',
      answer: 'React components can communicate by passing props between them.',
    },
    {
      question: 'What is the virtual DOM?',
      answer: 'The virtual DOM is a lightweight copy of the real DOM for better performance.',
    },
    {
      question: 'What is the virtual DOM?',
      answer: 'The virtual DOM is a lightweight copy of the real DOM for better performance.',
    },
    {
      question: 'What is the virtual DOM?',
      answer: 'The virtual DOM is a lightweight copy of the real DOM for better performance.',
    },
    {
      question: 'What is the virtual DOM?',
      answer: 'The virtual DOM is a lightweight copy of the real DOM for better performance.',
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section style={{ position:'relative',overflow:'hidden',minHeight:'80dvh'}} id='FAQ'>
    <div style={{ position:'absolute',width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',zIndex:'2' }}><h1 className="FAQ-bg-text">FAQ</h1></div> 
    <img
        style={{
          position: "absolute",
          height: "100%",
          opacity: ".5",
          width: "100%"
          ,zIndex:'2'
        }}
        src="images/Abstract extruded voronoi blocks background. minimal light clean corporate wall. 3d geometric surface illustration. polygonal elements displacement..png"
      />
    <div className="faq-container" style={{ marginTop:'3rem' }}>
    <h1 style={{ padding:'2rem',display:'none' }}>FAQs</h1>
    <div className='row' style={{ rowGap:'2rem',padding:'3rem' }}>
    
    {faqData.map((item, index) => (
        <div key={index} className="col-lg-6"  style={{ zIndex:'5' }}>
          <Button
            onClick={() => handleToggle(index)}
            aria-controls={`collapse-${index}`}
            aria-expanded={openIndex === index}
          >
            {item.question}
          </Button>
          <Collapse in={openIndex === index}>
            <div id={`collapse-${index}`}>
              <Card style={{ height:'fit-content',width:'fit-content' }}>
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
    </section>
  );
};

export default FAQPage;
