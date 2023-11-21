import React, { useState, useEffect } from "react";
import styles from "../styles/track.module.css";
import styles2 from "../styles/body.module.css";
import { TypeAnimation } from "react-type-animation";

function Card() {
  const [cardChange, setCardChange] = useState(0);
  return (
    <section id="tracks">
      <div className={styles2.bodyy}>Tracks</div>

      <div className="flex flex-col  items-center justify-center">
        <div class=" mx-auto">
          <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  gap-x-20">
            <div>
              {cardChange === 0 && (
                <div className={styles.card}>
                  <p className={styles.card_content}>
                    <TypeAnimation sequence={[`Track 1.`, 1000]} speed={95} />
                  </p>
                </div>
              )}
            </div>
            <div>
              {cardChange === 0 && (
                <div className={styles.card2}>
                  <p className={styles.card_content}>
                    <TypeAnimation sequence={[`Track 2.`, 1000]} speed={95} />
                  </p>
                </div>
              )}
            </div>
            <div>
              {cardChange === 0 && (
                <div className={styles.card}>
                  <p className={styles.card_content}>
                    <TypeAnimation sequence={[`Track 3.`, 1000]} speed={95} />
                  </p>
                </div>
              )}
            </div>

            <div>
              {cardChange === 0 && (
                <div className={styles.card2}>
                  <p className={styles.card_content}>
                    <TypeAnimation sequence={[`Track 4.`, 1000]} speed={95} />
                  </p>
                </div>
              )}
            </div>

            <div>
              {" "}
              {cardChange === 0 && (
                <div className={styles.card}>
                  <p className={styles.card_content}>
                    <TypeAnimation sequence={[`Track 5.`, 1000]} speed={95} />
                  </p>
                </div>
              )}
            </div>

            <div>
              {cardChange === 0 && (
                <div className={styles.card2}>
                  <p className={styles.card_content}>
                    <TypeAnimation sequence={[`Track 6.`, 1000]} speed={95} />
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
