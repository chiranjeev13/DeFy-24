
import React, { useState, useEffect } from "react";
import stylesb from "../styles/card.module.css";
import logo from "../assets/defy-logo.svg";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import useSound from "use-sound";
import Eventcard from "./event";
import styles from "../styles/body.module.css";


const mob_timeline = () => {
    const [cardChange, setCardChange] = useState(0);
    return (
        <section id='mob-timeline'>
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
                        <p className={stylesb.card_content}>
                            REGISTRATIONS OPEN:
                        </p>
                        
                        <TypeAnimation
                            className={stylesb.bottom}
                            sequence={[`Choose a track to compete in and register your team.`]}
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
                                sequence={[`Instagram : @de.fy24`, 2500, `X : @defy_2024`, 2500]}
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
                        <p className={stylesb.card_content}>
                            IDEATION ROUND:
                        </p>

                        <TypeAnimation
                            className={stylesb.bottom}
                            sequence={[`Submit your Web3 Startup Idea using the DeFy template in the Ideation round. The template and rulebook can be found on Devfolio when you register.`]}
                            cursor={false}
                            speed={65}
                        />
                        <TypeAnimation
                            className={stylesb.color}
                            sequence={[`5th Dec, 2023 - 25th Dec, 2023`]}
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
                                sequence={[`Instagram : @de.fy24`, 2500, `X : @defy_2024`, 2500]}
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
                        <p className={stylesb.card_content}>
                            SUBMISSIONS CLOSE:
                        </p>

                        <TypeAnimation
                            className={stylesb.bottom}
                            sequence={[`Sit back and relax while the judges go through your submissions.`]}
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
                                sequence={[`Instagram : @de.fy24`, 2500, `X : @defy_2024`, 2500]}
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
                        <p className={stylesb.card_content}>
                            SHORTLIST ANNOUNCEMENT:
                        </p>

                        <TypeAnimation
                            className={stylesb.bottom}
                            sequence={[`The Top 30 teams, who will be progressing to the Hackathon phase, shall be announced. These teams shall be invited to the main event spanning 3 days, happening offline at VIT Chennai.`]}
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
                                sequence={[`Instagram : @de.fy24`, 2500, `X : @defy_2024`, 2500]}
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
                        <p className={stylesb.card_content}>
                            INTO THE ENDGAME:
                        </p>

                        <TypeAnimation
                            className={stylesb.bottom}
                            sequence={[`Top teams will contend against each other in this 36 hour hack - where they not only have to build the prototype of their product, but also come up with an investor-ready Pitch Deck.`]}
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
                                sequence={[`Instagram : @de.fy24`, 2500, `X : @defy_2024`, 2500]}
                                repeat={Infinity}
                                cursor={false}
                                speed={50}
                            />
                        </p>
                    </div>
                )}

            </div>
            {/* <section >
                
                <div className={styles.bodyy}>Event Timeline</div>
                <div >
                    <div >
                        <div>
                            <Eventcard
                                title={"REGISTRATIONS OPEN:"}
                                timeline={"5th Dec, 2023"}
                                body={"Choose a track to compete in and register your team."}
                                date={"2023-05-12T23:00:03"}
                                suppressHydrationWarning={true}
                                k={1}
                            />{" "}
                        </div>
                        <div className={styles.line}></div>

                        <div >
                            <Eventcard
                                title={"IDEATION ROUND:"}
                                timeline={"5th Dec, 2023 - 31st Dec, 2023"}
                                body={
                                    "Submit your Web3 Startup Idea using the DeFy template in the Ideation round. The template and rulebook can be found on Devfolio when you register."
                                }
                            />
                        </div>
                        <div className={styles.line}></div>

                        <div >
                            <Eventcard
                                title={"SUBMISSIONS CLOSE:"}
                                timeline={"31st Dec, 2023"}
                                body={
                                    "Sit back and relax while the judges go through your submissions."
                                }
                            />
                        </div>
                        <div className={styles.line}></div>

                        <div >
                            <Eventcard
                                title={"SHORTLIST ANNOUNCEMENT:"}
                                timeline={"15th Jan, 2023"}
                                body={
                                    "The Top 30 teams, who will be progressing to the Hackathon phase, shall be announced. These teams shall be invited to the main event spanning 3 days, happening offline at VIT Chennai."
                                }
                            />
                        </div>
                        <div className={styles.line}></div>

                        <div >
                            <Eventcard
                                title={"INTO THE ENDGAME:"}
                                timeline={"22nd, 23rd & 24th Jan, 2023"}
                                body={
                                    "Top teams will contend against each other in this 36 hour hack - where they not only have to build the prototype of their product, but also come up with an investor-ready Pitch Deck."
                                }
                            />
                        </div>
                    </div>
                </div>
            </section> */}
        </section>
    )
}

export default mob_timeline
