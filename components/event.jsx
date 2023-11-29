import React, { useEffect, useState } from "react";
import styles from "../styles/event.module.css";
import calendar from "../assets/calendar.svg";
import Image from "next/image";

function EventCard({ body, title, date, timeline, k }) {
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className="mt-3 text-xl">{body}</div>
      {k === 1 && (
        <div className={styles.devfolio}>
          <div
            className="apply-button"
            data-hackathon-slug="defy2024"
            data-button-theme="dark"
            style={{ height: "44px", width: "312px" }}
          ></div>
        </div>
      )}
      <div className={styles.timeline}>
        <div className={styles.calendar}>
          <Image src={calendar} width={43} height={43} />
        </div>
        {timeline}
      </div>

    </div>
  );
}

export default EventCard;
