import React, { useState } from 'react';
import styles from '../styles/faq.module.css';
import Image from 'next/image';

const FAQ = () => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const faqData = [
        "What is the DeFy24 Hackathon?",
        "Who can participate?",
        "What are the prizes?",
        "What is the schedule?",
        "How do I register?",
    ];

    const faqAnswers = [
        "The DeFy24 Hackathon is a 24-hour hackathon focused on decentralized finance (DeFi) projects.",
        "Anyone interested in DeFi and development can participate.",
        "There are cash prizes for the top projects.",
        "The schedule includes coding, presentations, and judging phases.",
        "You can register on our website.",
    ];

    const handleMouseOver = (index, event) => {
        const popupXPercent = ((event.clientX) / window.innerWidth) * 100;
        const popupYPercent = ((event.clientY) / window.innerHeight) * 100;
        setMouseX(`${popupXPercent}%`);
        setMouseY(`${popupYPercent}%`);
        setCurrentQuestion(faqAnswers[index]);
    };

    return (
        <div>
            <div className={styles.heading}>
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className={styles.questions}>
                <div className={styles.inner_questions}>
                    {faqData.map((question, index) => (
                        <div key={index} className={styles.questionContainer} onMouseMove={(event) => handleMouseOver(index, event)}>
                            <div className={styles.questionHeader}>
                                <h1>{index + 1}. {question}</h1>
                            </div>
                            <hr />
                            <br />
                            <div className={styles.popup} style={{ left: mouseX, top: mouseY }}>
                                {currentQuestion && (
                                    <div>
                                        <p>{currentQuestion}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
