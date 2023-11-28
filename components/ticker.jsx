import React from "react";
import Ticker from "framer-motion-ticker";
import styles from "../styles/ticker.module.css";

function TickerTape() {
  const loop = [1];
  return (
    <section id="ticker">
      <Ticker duration={13}>
        {loop.map((item, index) => (
          <div key={index} className={styles.body}>
            Announcing&nbsp;
            <div className={styles.body_w}>
              {" "}
              ANNOUNCING DEFY 24, WHERE WEB3 MEETS BUSINESS • A 36 HOUR
              COLLEGE-LEVEL HACK FOR FUTURE WEB3 STARTUP FOUNDERS • REGISTER NOW
            </div>
          </div>
        ))}
      </Ticker>
    </section>
  );
}
export default TickerTape;
