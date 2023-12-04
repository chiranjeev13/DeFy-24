import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import stylesb from "../styles/card.module.css";
import Eventcard from "./event";
import styles from "../styles/body.module.css";
import arrow from "../assets/arrow.svg";
import Image from "next/image";

import logo from "../assets/defy-logo.svg";
import { TypeAnimation } from "react-type-animation";

function ScrollSection() {
  const [cardChange, setCardChange] = useState(0);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
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
      <div className="w-full hidden lg:block">
        <div className={styles.bodyy}>Event Timeline</div>
        {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

        {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section">
              <Eventcard
                title={"REGISTRATIONS OPEN:"}
                timeline={"5th Dec,2023"}
                body={"Choose a track to compete in and register your team."}
                date={"2023-05-12T23:00:03"}
                suppressHydrationWarning={true}
                k={1}
              />{" "}
            </div>
            <div className={styles.line}></div>

            <div className="scroll-section">
              <Eventcard
                title={"IDEATION ROUND:"}
                timeline={"5th Dec,2023 - 31st Dec,2023"}
                body={
                  "Submit your Web3 Startup Idea using the DeFy template in the Ideation round. The template and rulebook can be found on Devfolio when you register."
                }
              />
            </div>
            <div className={styles.line}></div>

            <div className="scroll-section">
              <Eventcard
                title={"SUBMISSIONS CLOSE:"}
                timeline={"31st Dec,2023"}
                body={
                  "Sit back and relax while the judges go through your submissions."
                }
              />
            </div>
            <div className={styles.line}></div>

            <div className="scroll-section">
              <Eventcard
                title={"SHORTLIST ANNOUNCEMENT:"}
                timeline={"15th Jan,2024"}
                body={
                  "The Top 30 teams, who will be progressing to the Hackathon phase, shall be announced. These teams shall be invited to the main event spanning 3 days, happening offline at VIT Chennai."
                }
              />
            </div>
            <div className={styles.line}></div>

            <div className="scroll-section">
              <Eventcard
                title={"INTO THE ENDGAME:"}
                timeline={"22nd, 23rd & 24th Jan,2024"}
                body={
                  "Top teams will contend against each other in this 36 hour hack - where they not only have to build the prototype of their product, but also come up with an investor-ready Pitch Deck."
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full block lg:hidden">
        <div className={styles.bodyy}>Event Timeline</div>
        <div className="flex flex-col xl:flex-row items-center justify-center">
          {cardChange === 0 && (
            <div className={stylesb.card}>
              <div
                className={stylesb.clipboard}
                onClick={() => {
                  setCardChange(1) && play && play();
                }}
              ></div>
              <Image src={logo} />
              <p className={stylesb.card_content}>REGISTRATIONS OPEN:</p>

              <TypeAnimation
                className={stylesb.bottom}
                sequence={[
                  `Choose a track to compete in and register your team.`,
                ]}
                cursor={false}
                speed={65}
              />
              <TypeAnimation
                className={stylesb.color}
                sequence={[`5th Dec, 2023`]}
                speed={1}
              />
            </div>
          )}

          {cardChange === 1 && (
            <div className={stylesb.card}>
              <div
                className={stylesb.clipboard}
                onClick={() => setCardChange(0)}
              ></div>
              <Image src={logo} />
              <p className={stylesb.card_content1}>
                <TypeAnimation
                  sequence={[
                    `Instagram : @de.fy24`,
                    2500,
                    `X : @defy_2024`,
                    2500,
                  ]}
                  repeat={Infinity}
                  cursor={false}
                  speed={50}
                />
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center">
          {cardChange === 0 && (
            <div className={stylesb.card}>
              <div
                className={stylesb.clipboard}
                onClick={() => {
                  setCardChange(1) && play && play();
                }}
              ></div>
              <Image src={logo} />
              <p className={stylesb.card_content}>IDEATION ROUND:</p>

              <TypeAnimation
                className={stylesb.bottom}
                sequence={[
                  `Submit your Web3 Startup Idea using the DeFy template in the Ideation round. The template and rulebook can be found on Devfolio when you register.`,
                ]}
                cursor={false}
                speed={65}
              />
              <TypeAnimation
                className={stylesb.color}
                sequence={[`5th Dec, 2023 - 31st Dec, 2023`]}
                speed={1}
              />
            </div>
          )}

          {cardChange === 1 && (
            <div className={stylesb.card}>
              <div
                className={stylesb.clipboard}
                onClick={() => setCardChange(0)}
              ></div>
              <Image src={logo} />
              <p className={stylesb.card_content1}>
                <TypeAnimation
                  sequence={[
                    `Instagram : @de.fy24`,
                    2500,
                    `X : @defy_2024`,
                    2500,
                  ]}
                  repeat={Infinity}
                  cursor={false}
                  speed={50}
                />
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center">
          {cardChange === 0 && (
            <div className={stylesb.card}>
              <div
                className={stylesb.clipboard}
                onClick={() => {
                  setCardChange(1) && play && play();
                }}
              ></div>
              <Image src={logo} />
              <p className={stylesb.card_content}>SUBMISSIONS CLOSE:</p>

              <TypeAnimation
                className={stylesb.bottom}
                sequence={[
                  `Sit back and relax while the judges go through your submissions.`,
                ]}
                cursor={false}
                speed={65}
              />
              <TypeAnimation
                className={stylesb.color}
                sequence={[`31st Dec, 2023`]}
                speed={1}
              />
            </div>
          )}

          {cardChange === 1 && (
            <div className={stylesb.card}>
              <div
                className={stylesb.clipboard}
                onClick={() => setCardChange(0)}
              ></div>
              <Image src={logo} />
              <p className={stylesb.card_content1}>
                <TypeAnimation
                  sequence={[
                    `Instagram : @de.fy24`,
                    2500,
                    `X : @defy_2024`,
                    2500,
                  ]}
                  repeat={Infinity}
                  cursor={false}
                  speed={50}
                />
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center">
          {cardChange === 0 && (
            <div className={stylesb.card}>
              <div
                className={stylesb.clipboard}
                onClick={() => {
                  setCardChange(1) && play && play();
                }}
              ></div>
              <Image src={logo} />
              <p className={stylesb.card_content}>SHORTLIST ANNOUNCEMENT:</p>

              <TypeAnimation
                className={stylesb.bottom}
                sequence={[
                  `The Top 30 teams, who will be progressing to the Hackathon phase, shall be announced. These teams shall be invited to the main event spanning 3 days, happening offline at VIT Chennai.`,
                ]}
                cursor={false}
                speed={65}
              />
              <TypeAnimation
                className={stylesb.color}
                sequence={[`5th Jan, 2024`]}
                speed={1}
              />
            </div>
          )}

          {cardChange === 1 && (
            <div className={stylesb.card}>
              <div
                className={stylesb.clipboard}
                onClick={() => setCardChange(0)}
              ></div>
              <Image src={logo} />
              <p className={stylesb.card_content1}>
                <TypeAnimation
                  sequence={[
                    `Instagram : @de.fy24`,
                    2500,
                    `X : @defy_2024`,
                    2500,
                  ]}
                  repeat={Infinity}
                  cursor={false}
                  speed={50}
                />
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center">
          {cardChange === 0 && (
            <div className={stylesb.card}>
              <div
                className={stylesb.clipboard}
                onClick={() => {
                  setCardChange(1) && play && play();
                }}
              ></div>
              <Image src={logo} />
              <p className={stylesb.card_content}>INTO THE ENDGAME:</p>

              <TypeAnimation
                className={stylesb.bottom}
                sequence={[
                  `Top teams will contend against each other in this 36 hour hack - where they not only have to build the prototype of their product, but also come up with an investor-ready Pitch Deck.`,
                ]}
                cursor={false}
                speed={65}
              />
              <TypeAnimation
                className={stylesb.color}
                sequence={[`22nd, 23rd & 24th Jan, 2023`]}
                speed={1}
              />
            </div>
          )}

          {cardChange === 1 && (
            <div className={stylesb.card}>
              <div
                className={stylesb.clipboard}
                onClick={() => setCardChange(0)}
              ></div>
              <Image src={logo} />
              <p className={stylesb.card_content1}>
                <TypeAnimation
                  sequence={[
                    `Instagram : @de.fy24`,
                    2500,
                    `X : @defy_2024`,
                    2500,
                  ]}
                  repeat={Infinity}
                  cursor={false}
                  speed={50}
                />
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
