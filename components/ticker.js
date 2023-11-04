import React from "react";
import Ticker from "framer-motion-ticker";
import styles from "../styles/ticker.module.css";

function TickerTape() {
  const loop = [1];
  return (
    <>
      <Ticker duration={13} >
        {loop.map((item, index) => (
          <div key={index} className={styles.body}>
            Announcing&nbsp;
            <div className={styles.body_w}>
              {" "}
              DeFy-24 a 36-hour collegiate hackathon uniting Web3 enthusiasts
              and aspiring entrepreneurs, emphasizing real innovation over
              typical tech solutions.
            </div>
          </div>
        ))}
      </Ticker>
    </>
  );
}
export default TickerTape;
