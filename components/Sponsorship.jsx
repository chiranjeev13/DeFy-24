import React from "react";
import styles from "../styles/body.module.css";
import devfolio from "../assets/Devfolio.svg";
import polygon from "../assets/Polygon.svg";
import replit from "../assets/replit.svg";
import qon2 from "../assets/qoneqt.svg";
import quicknode from "../assets/quicknode.svg";
import zk from "../assets/zkwlogo.png";
import gizmolab from "../assets/gizmolab7.svg";
import solscan from "../assets/solscan.png";
import mtutor from "../assets/mtutor.png";
import mediapartner from "../assets/mediapartner.png";
import knowledgepartner from "../assets/tie.png";
import finecon from "../assets/finecoin.png";
import qa from "../assets/qa.png";
import krypc from "../assets/krypc.svg";
import qaw from "../assets/qaw.png";
import plutopeCrypto from "../assets/plutopeCrypto.svg";
import Image from "next/image";
import moi from "../assets/moi.png";

const Sponsorship = () => {
  return (
    <section id="sponsorship">
      <div className={styles.bodyy}>TITLE SPONSOR</div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 gap-y-[6rem]  px-4  ">
        <a
          href="https://zkinnovations.com"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  "
        >
          <Image
            src={zk}
            alt="ZKWALLET LOGO"
            className="mt-4 w-full h-auto transform scale-150 transition-transform duration-300 flex items-center justify-center shadow-inner"
          />

          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
      </div>

      <div className={styles.bodyy}>CO-SPONSOR</div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-[6rem] gap-x-[6rem] px-4  ">
        <a
          href="https://www.gizmolab.io"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  "
        >
          <Image
            src={gizmolab}
            alt="GIZMOLAB LOGO"
            className="w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner p-4"
          />

          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
        <a
          href="https://www.m-tutor.com/"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  "
        >
          <Image
            src={mtutor}
            alt="MTUTOR LOGO"
            className="w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner md:p-28"
          />

          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
        <a
          href="https://moi.technology/"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  "
        >
          <Image
            src={moi}
            alt="MOI LOGO"
            className="w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner p-4"
          />

          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
      </div>
      <div className={styles.bodyy}>TRACK SPONSOR</div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-y-[6rem]  px-4  ">
        <a
          href="https://krypcore.com"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  "
        >
          <Image
            src={krypc}
            alt="krypc LOGO"
            className="w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner"
          />
          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
      </div>
      <div className={styles.bodyy}>CATEGORY SPONSORS</div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 gap-y-[6rem] py-12 px-4 mb-6 ">
        <a
          href="https://qoneqt.com"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  "
        >
          <Image
            src={qon2}
            alt="QONEQT LOGO"
            className="mt-4 w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner"
          />

          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 gap-y-[6rem] py-12 px-4 mb-6 ">
        <a
          href="https://www.quicknode.com/"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  "
        >
          <Image
            src={quicknode}
            alt="quicknode LOGO"
            className="mt-4 w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner"
          />

          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-[6rem] py-12 px-4 mb-6 ">
        <a
          href="https://polygon.technology/"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  "
        >
          <Image
            src={polygon}
            alt="POLYGON LOGO"
            className="mt-4 w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner"
          />

          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
        <a
          href="https://replit.com"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in"
        >
          <Image
            src={replit}
            alt="REPLIT LOGO"
            className="w-full h-auto transform scale-90  transition-transform duration-300 "
          />
          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
        <a
          href="https://devfolio.co"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in"
        >
          <Image
            src={devfolio}
            alt="DEVFOLIO LOGO"
            className="mt-4 w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner"
          />
          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
      </div>

      <div className={styles.bodyy}>Security Partner</div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-y-[6rem]  px-4  ">
        <a
          href="https://solidityscan.com/"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  "
        >
          <Image
            src={solscan}
            alt="SOLSCAN LOGO"
            className="w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner"
          />
          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
      </div>

      <div className={styles.bodyy}>Web3 Diligence Partner</div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-y-[6rem]  px-4  ">
        <a
          href="https://www.quillaudits.com/smart-contract-audit"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  "
        >
          <Image
            src={qa}
            alt="Quill Audits LOGO"
            className="w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner"
          />
          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
      </div>
      <div className={styles.bodyy}>Media Partner</div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-y-[6rem]  px-4  ">
        <a
          href="https://startupnews.fyi/"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  "
        >
          <Image
            src={mediapartner}
            alt="Startup News FYI LOGO"
            className="w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner"
          />
          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
      </div>
      <div className={styles.bodyy}>Knowledge Partner</div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-y-[6rem]  px-4  ">
        <a
          href="https://chennai.tie.org/"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  "
        >
          <Image
            src={knowledgepartner}
            alt="TIE Chennai LOGO"
            className="w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner"
          />
          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
      </div>
      <div className={styles.bodyy}>Insights Partner</div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-y-[6rem]  px-4  ">
        <a
          href="https://www.linkedin.com/company/finecondotin"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  "
        >
          <Image
            src={finecon}
            alt="Finecon LOGO"
            className="w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner"
          />
          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
      </div>
      <div className={styles.bodyy}>Crypto Partner</div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-y-[6rem]  px-4  ">
        <a
          href="https://www.plutope.io"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  "
        >
          <Image
            src={plutopeCrypto}
            alt="PLUTOPE LOGO"
            className="w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner"
          />
          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
      </div>
      {/* <div className={styles.bodyy}>OUR SPONSORS</div> */}

      {/* <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-[6rem] py-12 px-4 mb-6 ">
        <a
          href="https://polygon.technology/"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in  "
        >
          <Image
            src={polygon}
            alt="POLYGON LOGO"
            className="mt-4 w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner"
          />

          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
        <a
          href="https://replit.com"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in"
        >
          <Image
            src={replit}
            alt="REPLIT LOGO"
            className="w-full h-auto transform scale-90  transition-transform duration-300 "
          />
          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
        <a
          href="https://devfolio.co"
          target="_blank"
          className="relative overflow-hidden group hover:shadow-xl transition duration-300 ease-in"
        >
          <Image
            src={devfolio}
            alt="DEVFOLIO LOGO"
            className="mt-4 w-full h-auto transform scale-90 transition-transform duration-300 flex items-center justify-center shadow-inner"
          />
          <div className="absolute inset-0 transition-opacity duration-300"></div>
        </a>
      </div> */}
    </section>
  );
};

export default Sponsorship;
