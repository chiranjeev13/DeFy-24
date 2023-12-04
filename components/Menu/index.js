import { motion } from "framer-motion";
import { opacity, slideLeft, mountAnim } from "../../animation/anim";
import styles from "./style.module.scss";
import Link from "./link";
import { useMediaQuery } from "react-responsive";

const menu = [
  {
    title: ".Home",
    description: "To See Everything",
    link: "https://www.defy24.xyz/#home",
  },
  {
    title: ".Community",
    description: "To Keep in Touch",
    link: "https://twitter.com/defy_2024",
  },
  {
    title: ".Event Timeline",
    description: "To Send a FAX",
    link: "https://www.defy24.xyz/#timeline",
  },
  {
    title: ".Tracks",
    description: "To Build a project",
    link: "https://www.defy24.xyz/#tracks",
  },
  {
    title: ".FAQ",
    description: "To Get Answers",
    link: "https://www.defy24.xyz/#faq",
  },
];

export default function Index({ closeMenu }) {

  return (
    <motion.div
      className={styles.menu}
      variants={opacity}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={() => {
        closeMenu();
      }}
    >
      <div className={styles.header}>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={() => {
            closeMenu();
          }}
          width="28"
          height="28"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5L67 67" stroke="white" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" />
        </motion.svg>
      </div>

      <div className={styles.body}>
        {menu.map((el, index) => {
          return <Link data={el} index={index} key={index} href={el.link} />;
        })}
      </div>
    </motion.div>
  );
}
