import React, { useEffect, useState } from "react";
import styles from "../styles/event.module.css";
import Countdown from "react-countdown";

function EventCard({ body, title, date }) {
  const [complete, setComplete] = useState(false);

  // Define a function that sets the state when the countdown is complete
  const handleCountdownComplete = () => {
    setComplete(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className="mt-3 text-xl">{body}</div>
      {complete ? (
        <div className={styles.countdown}></div>
      ) : (
        <div className={styles.countdown}>
          STARTS IN:{" "}
          <Countdown onComplete={handleCountdownComplete} date={date} />
        </div>
      )}
    </div>
  );
}

export default EventCard;
