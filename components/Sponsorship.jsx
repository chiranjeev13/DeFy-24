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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-[6rem] py-12 px-4 mb-6 ">
        <a href="https://polygon.technology/" target="_blank" className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  ">
          <Image
            src={polygon}
            alt="POLYGON LOGO"
            className="mt-4 w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner"
          />

          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
        <a href="https://replit.com" target="_blank" className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in">
          <Image src={replit} alt="REPLIT LOGO" className="w-full h-auto transform scale-90  transition-transform duration-300 " />
          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
        <a href="https://devfolio.co" target="_blank" className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in">
          <Image src={devfolio} alt="DEVFOLIO LOGO" className="mt-4 w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner" />
          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
      </div>
    </section>

  );
};

export default Sponsorship;
