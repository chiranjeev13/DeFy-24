"use client"

import React, { useState } from "react";
import styles from "../styles/faq.module.css";
import styles2 from "../styles/body.module.css";
import { motion } from "framer-motion";


import { TypeAnimation } from "react-type-animation";

const FAQ = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    "Registrations are free of cost to all.",
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
      <div className="w-full lg:block hidden">

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
      </div>

      <div className="w-full block lg:hidden">
        <div className="font-robomon mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="mb-8 text-center md:mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold md:text-7xl">Frequently Asked</h2>
          </div>

          <div className="mb-12 flex flex-col uppercase">
            {faqData.map((question, index) => (
              <div key={index} className="mb-6 max-w-4xl p-8">
                <motion.div
                  className="flex cursor-pointer justify-between pb-8"
                  onClick={() => toggleAnswer(index)}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-xl">{question}</p>
                  <div className={`relative ml-10 mt-1 flex h-5 w-5 items-center justify-center ${openIndex === index ? 'rotate-90' : ''}`}>
                    <div className="absolute h-5 w-0.5 bg-[#99ff52]"></div>
                    <div className="h-0.5 w-5 bg-[#99ff52]"></div>
                  </div>
                </motion.div>
                <motion.div
                  className={`mb-4  pb-5 ${openIndex === index ? '' : 'hidden'}`}
                  initial="closed"
                  animate={openIndex === index ? 'open' : 'closed'}
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    closed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {faqAnswers[index]}
                  {/* Line that becomes visible on click */}
                  <motion.div
                    className="w-full h-0.5 bg-[#99ff52] mt-4"
                    initial={{ opacity: 0 }}
                    animate={openIndex === index ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default FAQ;
