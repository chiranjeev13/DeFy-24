import React from "react";
import Marquee from "react-fast-marquee";
import styles from "../styles/CommunityPartners.module.css";
import Image from "next/image";
import threepointo from "../assets/3.0club.jpg";
import befikra from "../assets/befikra.png";
import BhopalDAO from "../assets/BhopalDAO.png";
import blochub from "../assets/blochub.svg";
import blockchcainsrm from "../assets/blockchainsrm.svg";
import codeate from "../assets/codeate.in.png";
import CodeInBlogs from "../assets/CodeInBlogs.jpg";
import devstation from "../assets/devstation.png";
import hyddao from "../assets/hyddao.png";
import LumosWizard from "../assets/LumosWizard.png";
import polygonguildkolkata from "../assets/polygonguildkolkata.jpg";
import skepsis from "../assets/skepsis.png";
import social3 from "../assets/social3.png";
import spheron from "../assets/spheron.png";
import tpgsrmist from "../assets/tpgsrmist.png";
import web3chennai from "../assets/web3chennai.png";
import web3kerala from "../assets/web3kerala.png";
import web3meetups from "../assets/web3meetups.png";
import Decentralclass from "../assets/decentralclass.png";
import polygonguildjaipur from "../assets/polygonguildjaipur.jpeg";
import vitrendz from "../assets/vitrendz.png";
import tpg from "../assets/730.png";
import HC from "../assets/HC.png";
import ecellm from "../assets/ecellm.png";

function CommunityPartners() {
  const partnerLogos = [
    Decentralclass,
    polygonguildjaipur,
    vitrendz,
    tpg,
    threepointo,
    befikra,
    BhopalDAO,
    blochub,
    blockchcainsrm,
    codeate,
    CodeInBlogs,
    devstation,
    hyddao,
    LumosWizard,
    polygonguildkolkata,
    skepsis,
    social3,
    spheron,
    tpgsrmist,
    web3chennai,
    web3kerala,
    web3meetups,
    HC,
    ecellm,
  ];

  const logosLine1 = partnerLogos.slice(0, partnerLogos.length / 2);
  const logosLine2 = partnerLogos.slice(partnerLogos.length / 2);

  return (
    <section id="ticker">
      <div className={styles.bodyy}>
        <h1>Community Partners</h1>
      </div>
      {/* Marquee - Line 1 */}
      <Marquee speed={150}>
        {logosLine1.map((item, index) => (
          <div key={index} className={styles.body}>
            <div className={styles.body_w}>
              <Image
                key={index}
                src={item}
                alt={`Partner Logo ${item}`}
                className="w-40 h-auto transform scale-90 object-contain transition-transform duration-300 mx-4 flex items-center justify-center shadow-inner  "
              />
            </div>
          </div>
        ))}
      </Marquee>
      {/* Marquee - Line 2 */}
      <Marquee speed={150} direction="right">
        {logosLine2.map((item, index) => (
          <div key={index} className={styles.body}>
            <div className={styles.body_w}>
              <Image
                key={index}
                src={item}
                alt={`Partner Logo ${item}`}
                className="w-40 h-auto transform scale-90 object-contain  transition-transform duration-300 mx-4 flex items-center justify-center shadow-inner "
              />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default CommunityPartners;
