import styles from "../styles/header.module.css";
import logo from "../assets/defy-logo.svg";
import chat from "../assets/chat.svg";
import Image from "next/image";
import React from "react";
import useSound from "use-sound";

import { useDencrypt } from "use-dencrypt-effect";
const Example = ({ symbol }) => {
  const [value, setValue] = useDencrypt(symbol);
  return <div onMouseEnter={() => setValue(symbol)}>{value}</div>;
};

function Header() {
  const [play] = useSound("https://upcdn.io/FW25bjZ/raw/hover.wav");

  return (
    <>
      <div className={styles.header}>
        <div className={styles.placements}>
          <Image src={logo} className={styles.logoImage}></Image>
          <div className={styles.tabs}>
            <a href="#home">
              <div
                className={styles.buttons}
                onMouseEnter={() => play && play()}
              >
                . <Example symbol={"HOME"} />
              </div>
            </a>
            <a href="#community">
              <div
                className={styles.buttons}
                onMouseEnter={() => play && play()}
              >
                . <Example symbol={"COMMUNITY"} />
              </div>
            </a>
            <a href="#timeline">
              <div
                className={styles.buttons}
                onMouseEnter={() => play && play()}
              >
                . <Example symbol={"EVENT TIMELINE"} />
              </div>
            </a>
            <a href="#tracks">
              <div
                className={styles.buttons}
                onMouseEnter={() => play && play()}
              >
                . <Example symbol={"Tracks"} />
              </div>
            </a>
            <a href="#faq">
              <div
                className={styles.buttons}
                onMouseEnter={() => play && play()}
              >
                . <Example symbol={"FAQ"} />
              </div>
            </a>
          </div>
          <div className={styles.chat}>
            <Image src={chat} />
            <div
              className={styles.chat_text}
              onMouseEnter={() => play && play()}
            >
              <Example symbol={"EVENT ASSISTANCE"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
