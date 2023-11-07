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
            <div className={styles.buttons}>
              <a href="#home">
                . <Example symbol={"HOME"} />
              </a>
            </div>
            <div className={styles.buttons}>
              <a href="#community">
              . <Example symbol={"COMMUNITY"} />
              </a>
            </div>
            <div className={styles.buttons}>
              <a href="#timeline">
              . <Example symbol={"EVENT TIMELINE"} />
              </a>
            </div>
            <div className={styles.buttons}>
              <a href="#faq">
              . <Example symbol={"FAQ"} />
              </a>
            </div>
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
