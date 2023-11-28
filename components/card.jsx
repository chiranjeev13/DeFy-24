import React, { useState, useEffect } from "react";
import styles from "../styles/card.module.css";
import logo from "../assets/defy-logo.svg";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import useSound from "use-sound";

function Card() {
  const [cardChange, setCardChange] = useState(0);
  const [play] = useSound("https://www.fesliyanstudios.com/play-mp3/387");
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center">
      {cardChange === 0 && (
        <div className={styles.card}>
          <div
            className={styles.clipboard}
            onClick={() => {
              setCardChange(1) && play && play();
            }}
          ></div>
          <Image src={logo} />
          <p className={styles.card_content}>
            Unlike typical college-level hackathons, where the emphasis lies
            only on programming a tech solution, DeFy 24 seeks fresh product
            ideas in the Web3 space that can be transformed into real
            businesses. We're on the lookout for Web3-powered startup ideas that
            propel us into an era where 'Decentralisation' and 'Future Yield' go
            hand in hand.
          </p>
          <TypeAnimation
            className={styles.bottom}
            sequence={[`Do you have what it takes to `]}
            cursor={false}
            speed={65}
          />
          <TypeAnimation
            className={styles.color}
            sequence={[`#DefyTheNorm?`]}
            speed={1}
          />
        </div>
      )}

      {cardChange === 1 && (
        <div className={styles.card}>
          <div
            className={styles.clipboard}
            onClick={() => setCardChange(0)}
          ></div>
          <Image src={logo} />
          <p className={styles.card_content1}>
            <TypeAnimation
              sequence={[`Instagram : @de.fy24`, 2500, `X : @defy_2024`, 2500]}
              repeat={Infinity}
              cursor={false}
              speed={50}
            />
          </p>
        </div>
      )}
      {/* <MediaPlayer
        className={styles.video}
        src="https://upcdn.io/FW25bjZ/raw/glow.webm"
        muted={true}
        loop={true}
        autoplay={true}
        playbackRate={1.75}
        aspectRatio="1:1"
      >
        <MediaProvider />
      </MediaPlayer> */}
    </div>
  );
}

export default Card;
