import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Eventcard from "./event";
import styles from "../styles/body.module.css";
import arrow from "../assets/arrow.svg";
import Image from "next/image";
function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: window.innerWidth > 768 ? "-330vw" : "-600vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "center center",
          end: "8000 center",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer" id="timeline">
      <div className={styles.bodyy}>Event Timeline</div>
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <Eventcard
              title={"REGISTRATIONS OPEN: 5th Dec, 2023"}
              body={"Choose a track to compete in and register your team."}
              date={"2023-05-12T23:00:03"}
              suppressHydrationWarning={true}
            />{" "}
          </div>
          <div className={styles.line}>
            <Image src={arrow} />
          </div>

          <div className="scroll-section">
            <Eventcard
              title={"IDEATION ROUND: 5th Dec, 2023 - 31st Dec, 2023"}
              body={"Submit your Web3 Startup Idea using the DeFy template in the Ideation round. The template and rulebook can be found on Devfolio when you register."}
            />
          </div>
          <div className={styles.line}>
            <Image src={arrow} />
          </div>

          <div className="scroll-section">
            <Eventcard
              title={"SUBMISSIONS CLOSE: 31st Dec, 2023"}
              body={"Sit back and relax while the judges go through your submissions."}
            />
          </div>
          <div className={styles.line}>
            <Image src={arrow} />
          </div>

          <div className="scroll-section">
            <Eventcard
              title={"SHORTLIST ANNOUNCEMENT: 15th Jan, 2023"}
              body={"The Top 30 teams, who will be progressing to the Hackathon phase, shall be announced. These teams shall be invited to the main event spanning 3 days, happening offline at VIT Chennai."}
            />
          </div>
          <div className={styles.line}>
            <Image src={arrow} />
          </div>

          <div className="scroll-section">
            <Eventcard
              title={"HACKATHON: 22nd, 23rd & 24th Jan, 2023"}
              body={"Top teams will contend against each other in this 36 hour hack - where they not only have to build the prototype of their product, but also come up with an investor-ready Pitch Deck."}
            />
          </div>
          

        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
