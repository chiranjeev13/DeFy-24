import React, { useState } from "react";
import styles from "../styles/body.module.css";
import Card from "./card";

function Body() {
  return (
    <>
      <section id="home">
        <div>
          <div className={styles.bodyy}>
            Core Concept of DeFy
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
