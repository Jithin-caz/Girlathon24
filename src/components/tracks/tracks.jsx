import React from 'react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const themes = [
  {
    header: 'Mental Health',
    img: 'health.png',
    problems: [
      'Unsafe Commutes and Street Harassment: Street harassment and unsafe commutes remain prevalent challenges for women and girls, particularly during night-time travel or in remote areas. How can we enhance personal safety and provide effective protection in such situations?',
      'Lack of Safe and Anonymous Reporting Channels: Fear of backlash, stigma, and lack of anonymity deter many students from reporting instances of harassment or abuse, allowing serious issues to go unaddressed. How can we create a safe and effective channel for students to voice their concerns without fear of exposure?',
      'Choose your own problem statement related to this track and propose a solution for it.',
    ],
  },
  {
    header: 'Disaster Management',
    img: 'dis.png',
    problems: [
      'Limited Inclusion of Women in Disaster Preparedness and Response Planning: Women are underrepresented in local and national disaster planning, leading to solutions that do not account for their specific vulnerabilities. Solutions are needed to facilitate better participation, training, and representation of women in these processes.',
      'Lack of Gender-Sensitive Emergency Communication Channels: During disasters, women often struggle to communicate urgent needs or safety concerns due to lack of access to secure, private, and inclusive communication methods. Develop solutions to bridge this communication gap under crisis conditions.',
      'Choose your own problem statement related to this track and propose a solution for it.',
    ],
  },
  {
    header: 'Digital Privacy',
    img: 'sec.png',
    problems: [
      'Inadequate Tools to Prevent Image-Based Abuse (Revenge Porn, Deepfakes): The misuse of personal images—including unauthorized sharing, deepfakes, and revenge porn—poses a serious threat to women’s safety and dignity. There is a need for tools that can detect, report, and help take down such content while offering legal and emotional support.',
      'Lack of Real-Time Emergency Response Features for Digital Threats: In the face of cyberstalking, blackmail, or online threats, women often lack immediate and secure channels to seek help. Solutions are required to enable real-time emergency response through digital platforms that connect users to helplines, legal aid, or trusted contacts at the click of a button.',
      'Choose your own problem statement related to this track and propose a solution for it.',
    ],
  },
];

export default function Tracks() {
  return (
    <section
      className="tracks"
      id="TRACKS"
      style={{
        position: 'relative',
        zIndex: 20,
        background: '#2b2b2b',
        minHeight: '90vh',
        padding: '3rem 1rem',
      }}
    >
      {/* Background image */}
      <img
        style={{
          position: 'absolute',
          height: '100%',
          opacity: 0.4,
          width: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
        src="images/backgroundAbstarct.png"
        alt="Background"
      />

      {/* Large faded background heading */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100dvh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          zIndex: 2,
          userSelect: 'none',
        }}
      >
        <h1
          className="about-bg-text"
          style={{ color: 'rgba(255, 255, 255, 0.05)', fontSize: '12rem' }}
        >
          tracks
        </h1>
      </div>

      {/* Main heading */}
      <h1
        style={{
          position: 'relative',
          zIndex: 3,
          paddingBottom: '1rem',
          color: 'white',
          textAlign: 'center',
          fontSize: '2.8rem',
          fontWeight: '700',
          letterSpacing: '1px',
        }}
      >
        Hackathon Tracks
      </h1>

      {/* Subheading */}
      <p
        style={{
          position: 'relative',
          zIndex: 3,
          color: 'rgba(255, 255, 255, 0.8)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto 2.5rem',
          fontSize: '1.1rem',
        }}
      >
        Explore the core themes of this year’s hackathon. Each track tackles a real-world challenge and invites you to build solutions that can make a real difference.
      </p>

      {/* Cards container */}
      <div
        className="tracks-big"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          padding: '2rem 1rem',
          position: 'relative',
          userSelect: 'none',
          zIndex: 3,
        }}
      >
        {themes.map((theme, index) => (
          <motion.div
            key={index}
            className="flip-card"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{
              perspective: '1200px',
              cursor: 'pointer',
              width: '320px',
              height: '420px',
              position: 'relative',
            }}
          >
            <div
              className="flip-card-inner"
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                textAlign: 'center',
                transition: 'transform 0.8s',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Front Side */}
              <div
                className="flip-card-front"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  background: 'transparent',
                  borderRadius: '12px',
                  border: '3px solid',
                  borderImageSlice: 1,
                  borderImageSource: 'linear-gradient(45deg, #ff97bf, #c19ddf)',
                  boxShadow: '0 6px 20px rgba(255, 153, 204, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  padding: '1rem',
                  userSelect: 'none',
                }}
              >
                <h3 style={{ marginBottom: '1rem', fontWeight: '700', fontSize: '1.8rem' }}>{theme.header}</h3>
                <img
                  src={`/images/${theme.img}`}
                  alt={theme.header}
                  style={{ height: '6rem', userSelect: 'none' }}
                />
              </div>

              {/* Back Side */}
              <div
                className="flip-card-back"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  background: 'transparent',
                  borderRadius: '12px',
                  border: '3px solid',
                  borderImageSlice: 1,
                  borderImageSource: 'linear-gradient(45deg, #ff97bf, #c19ddf)',
                  boxShadow: '0 6px 20px rgba(255, 153, 204, 0.3)',
                  color: 'white',
                  padding: '1rem 1.5rem',
                  transform: 'rotateY(180deg)',
                  overflowY: 'auto',
                  textAlign: 'left',
                }}
              >
                <h4
                  style={{
                    marginBottom: '1rem',
                    fontWeight: '700',
                    fontSize: '1.3rem',
                    borderBottom: '1px solid rgba(255, 153, 204, 0.4)',
                    paddingBottom: '0.5rem',
                    userSelect: 'none',
                  }}
                >
                  Problem Statements
                </h4>
                <ol
                  style={{
                    paddingLeft: '1.2rem',
                    listStyleType: 'decimal',
                    color: 'white',
                    fontSize: '0.95rem',
                    lineHeight: '1.4',
                  }}
                >
                  {theme.problems.map((problem, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: '1rem',
                        backgroundColor: 'rgba(255, 151, 191, 0.1)',
                        borderRadius: '6px',
                        padding: '0.5rem',
                        userSelect: 'text',
                      }}
                    >
                      {problem}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Flip style */}
      <style>{`
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
