import React, { useState, useEffect } from "react";
import styles from "../styles/track.module.css";
import styles2 from "../styles/body.module.css";
import { TypeAnimation } from "react-type-animation";

function Card() {
  const [cardChange, setCardChange] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardClass = isSmallScreen ? styles.card2 : styles.card;
  const cardClass2 = isSmallScreen ? styles.card : styles.card2;

  return (
    <section id="tracks">
      <div className={styles2.bodyy}>Tracks</div>

      <div className="flex flex-col  items-center justify-center">
        <div class=" mx-auto">
          <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3  gap-x-10 ">
            <div>
              <div className={styles.card}>
                <p className={styles.card_content}>
                  <TypeAnimation sequence={[`Track 1.`, 1000]} speed={95} />
                </p>
              </div>
            </div>
            <div>
              <div className={styles.card2}>
                <p className={styles.card_content}>
                  <TypeAnimation sequence={[`Track 2.`, 1000]} speed={95} />
                </p>
              </div>
            </div>
            <div>
              <div className={styles.card}>
                <p className={styles.card_content}>
                  <TypeAnimation sequence={[`Track 3.`, 1000]} speed={95} />
                </p>
              </div>
            </div>

            <div>
              <div className={cardClass}>
                <p className={styles.card_content}>
                  <TypeAnimation sequence={[`Track 4.`, 1000]} speed={95} />
                </p>
              </div>
            </div>

            <div>
              <div className={cardClass2}>
                <p className={styles.card_content}>
                  <TypeAnimation sequence={[`Track 5.`, 1000]} speed={95} />
                </p>
              </div>
            </div>

            <div>
              <div className={cardClass}>
                <p className={styles.card_content}>
                  <TypeAnimation sequence={[`Track 6.`, 1000]} speed={95} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
