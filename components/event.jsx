import React from "react";
import styles from "../styles/event.module.css";
import Countdown from "react-countdown";
function eventcard({ body, title }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.title}>ROUND 1</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        reprehenderit nostrum, esse ullam ad libero quisquam, magni, incidunt
        aspernatur repellendus impedit. Sapiente consequatur rerum alias
        doloremque modi ducimus omnis! Aut.
        <Countdown date={Date.now() + 10000} />
      </div>
    </>
  );
}

export default eventcard;
