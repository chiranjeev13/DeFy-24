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
      <div className={styles.title}>REGISTRATIONS</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      reprehenderit nostrum, esse ullam ad libero quisquam, magni, incidunt
      aspernatur repellendus impedit. Sapiente consequatur rerum alias
      doloremque modi ducimus omnis! Aut.
      {complete ? (
        <div className={styles.countdown}>Over: 00:00:00:00</div>
      ) : (
        <div className={styles.countdown}>
          STARTS IN: <Countdown onComplete={handleCountdownComplete} date={date} />
        </div>
      )}
    </div>
  );
}

export default EventCard;
