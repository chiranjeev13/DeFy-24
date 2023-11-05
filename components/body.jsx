import React, { useState } from "react";
import styles from "../styles/body.module.css";
import Card from "./card";


function Body() {
  return (
    <>
      <div className={styles.bo}>
      <div className={styles.bodyy}>
        Core Concept of DeFy
        <Card />
      </div>
      </div>
    </>
  );
}

export default Body;
