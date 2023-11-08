import React from "react";
import styles from "../styles/event.module.css";

function eventcard({ body, title }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.title}>ROUND 1</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        reprehenderit nostrum, esse ullam ad libero quisquam, magni, incidunt
        aspernatur repellendus impedit. Sapiente consequatur rerum alias
        doloremque modi ducimus omnis! Aut.
      </div>
    </>
  );
}

export default eventcard;
