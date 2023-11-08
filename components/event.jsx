import React, { useEffect, useState } from "react";
import styles from "../styles/event.module.css";
import Countdown from "react-countdown";

function eventcard({ body, title, date }) {
  const [delay, setDelay] = useState();
  useEffect(() => {
    setDelay(20000);
  }, []);
  if (delay) {
    return (
      <>
        <div className={styles.card}>
          <div className={styles.title}>ROUND 1</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          reprehenderit nostrum, esse ullam ad libero quisquam, magni, incidunt
          aspernatur repellendus impedit. Sapiente consequatur rerum alias
          doloremque modi ducimus omnis! Aut.
          <div className={styles}></div>
          <Countdown date={date} />
        </div>
      </>
    );
  }
}

export default eventcard;
