import React from "react";
import styles from "../styles/card.module.css";
import logo from "../assets/defy-logo.svg";
import Image from "next/image";

function Card() {
  return (
    <div className={styles.card}>
      <Image src={logo} alt="Logo" />
      <p className={styles.card_content}>
        DeFy 24 is a gripping 36-hour hackathon that unites Web3 enthusiasts and aspiring entrepreneurs at the college level, on a quest for real innovation. As the name suggests - DeFy 24 is unlike your typical collegiate hackathons, where the emphasis lies only on programming a tech solution.

        Here, we challenge the status quo and redefine what a hackathon can be. It's not just about coding; it's about disrupting and reimagining the future. DeFy 24 aims to break boundaries, merging technology and business acumen to create Web3-powered startups that propel us to an era where ‘Decentralization’ and ‘Future yield’ go hand in hand.
      </p>
    </div>
  );
}

export default Card;
