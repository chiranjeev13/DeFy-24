import React from "react";
import styles from "../styles/body.module.css";
import devfolio from "../assets/Devfolio.svg";
import polygon from "../assets/Polygon.svg";
import replit from "../assets/replit.svg";

import Image from "next/image";

const Sponsorship = () => {
  return (
    <section id="sponsorship">
      <div className={styles.bodyy}>Sponsorship</div>
      <div class="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-[6rem] py-12 px-4 mb-6">
        <a href="https://polygon.technology/">
          <Image src={polygon} alt="POLYGON LOGO" />
        </a>
        <a href="https://replit.com ">
          <Image src={replit} alt="REPLIT LOGO" />
        </a>
        <a href="https://devfolio.co">
          <Image src={devfolio} alt="DEVFOLIO LOGO" />
        </a>   
      </div>
    </section>
  );
};

export default Sponsorship;
