import React, { useState } from "react";
import styles from "../styles/body.module.css";
import Card from "./card";


function Body() {
  return (
    <>
      <div className={styles.body}>
        Core Concept of
        <div>DeFy</div>
        <Card />
      </div>
    </>
  );
}

export default Body;
