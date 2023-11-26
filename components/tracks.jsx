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
                  <TypeAnimation sequence={[`Account Abstraction:`, 1000]} speed={95} />
                </p>
                <p className="text-center text-base mt-10">
                  Create user-friendly and secure solutions for managing accounts in decentralized apps. Think of new ways to simplify how users interact with blockchain-based applications.
                </p>
              </div>
            </div>
            <div>
              <div className={styles.card2}>
                <p className={styles.card_content}>
                  <TypeAnimation sequence={[`DeFi:`, 1000]} speed={95} />
                </p>
                <p className="text-center text-base mt-10">
                  Build and analyze prototypes for decentralized finance. Imagine digital solutions for lending, trading, and other financial services without relying on traditional institutions.
                </p>
              </div>
            </div>
            <div>
              <div className={styles.card}>
                <p className={styles.card_content}>
                  <TypeAnimation sequence={[`Public Goods:`, 1000]} speed={95} />
                </p>
                
                <p className="text-center text-base mt-10 mb-4">
                  Develop projects that enhance the transparency, efficiency, and sustainability of supply chain management in the decentralized space. Create solutions that benefit the entire community by addressing challenges related to traceability, authenticity, and ethical practices within supply chains.
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
