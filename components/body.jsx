import React, { useState, useEffect } from "react";
import styles from "../styles/body.module.css";
import Card from "./card";

function Body() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <section id="home">
        <div>
          <div className={styles.bodyy}>
            Core Concept of DeFy
            <div
              className="apply-button"
              data-hackathon-slug="defy24"
              data-button-theme="dark-inverted"
              style={{ height: "44px", width: "312px" }}
            ></div>
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
