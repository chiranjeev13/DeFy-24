import styles from "../styles/header.module.css";
import logo from "../assets/defy-logo.svg";
import chat from "../assets/chat.svg";
import Image from "next/image";
import React from "react";

import { useDencrypt } from "use-dencrypt-effect";
const Example = ({ symbol }) => {
  const [value, setValue] = useDencrypt(symbol);
  return <div onMouseEnter={() => setValue(symbol)}>{value}</div>;
};

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.placements}>
          <Image src={logo}></Image>
          <div className={styles.tabs}>
            <a href="#home">
              <div className={styles.buttons}>
                . <Example symbol={"HOME"} />
              </div>
            </a>
            <a href="#community">
              <div className={styles.buttons}>
                . <Example symbol={"COMMUNITY"} />
              </div>
            </a>
            <a href="#timeline">
              <div className={styles.buttons}>
                . <Example symbol={"EVENT TIMELINE"} />
              </div>
            </a>
            <a href="#faq">
              <div className={styles.buttons}>
                . <Example symbol={"FAQ"} />
              </div>
            </a>
            <div className={styles.chat}>
              <Image src={chat} />
              <div className={styles.chat_text}>
                <Example symbol={"EVENT Assistance"} />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
