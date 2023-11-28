import React, { useState } from "react";
import styles from "../styles/faq.module.css";
import styles2 from "../styles/body.module.css";

import { TypeAnimation } from "react-type-animation";

const FAQ = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const faqData = [
    "Who can participate?",
    "What's the permitted team size? Can I participate individually?",
    "When will the applications and submissions close?",
    "Can I participate if I don't have deep technical knowledge in blockchain or Web3?",
    "Is it mandatory to focus on both the business and Web3 aspects?",
    "What is the prize pool?",
    "How much does it cost?",
    "Do you provide travel reimbursements for the finalists?",
  ];

  const faqAnswers = [
    "DeFy 24 is open to college students, from all backgrounds, who are passionate about Web3 and/or are aspiring entrepreneurs.",
    "You can participate in teams of 4-6 if you fit the above criteria. Unfortunately, DeFy 24 does not permit solo participations.",
    "Applications and submissions both close on 31st Dec, 2023.",
    "Absolutely! This hackathon encourages collaboration, so we expect teams to be comprised of both tech-oriented and business-oriented participants. Make sure you have both kinds in your team.",
    "Yes. Participants should not only showcase technical proficiency in their prototypes but also demonstrate a clear understanding of the market and the business potential of their ideas.",
    "The prize pool sits at 1 Lakh+ Rupees, consisting cash rewards, tokens and goodies!",
    "Registrations for the Ideation round are free of cost to all. A minimal admission fee will be charged for the offline 3 day Hackathon event.",
    "While DeFy 24 is free-of-charge to participants thanks to our sponsors and partners, the event cannot cover travel or other expenses for attendees.",
  ];

  const handleMouseOver = (index, event) => {
    const popupXPercent = (event.clientX / window.innerWidth) * 100;
    const popupYPercent = (event.clientY / window.innerHeight) * 100;
    setMouseX(`${popupXPercent}%`);
    setMouseY(`${popupYPercent}%`);

    setCurrentQuestion(faqAnswers[index]);
  };

  const clearCurrentQuestion = () => {
    setCurrentQuestion(null);
  };

  return (
    <section id="faq">
      <div className={styles2.bodyy}>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className={styles.questions}>
        <div className={styles.inner_questions}>
          {faqData.map((question, index) => (
            <div key={index} className={styles.questionContainer}>
              <div className={styles.questionHeader}>
                <h1
                  onMouseMove={(event) => handleMouseOver(index, event)}
                  onMouseLeave={clearCurrentQuestion}
                >
                  - {question}
                </h1>
              </div>
              <hr />
              <br />
              <div
                className={styles.popup}
                style={{ left: mouseX, top: mouseY }}
              >
                {currentQuestion && (
                  <div className={styles.answer}>
                    <p>
                      <TypeAnimation sequence={[currentQuestion]} speed={90} />
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
