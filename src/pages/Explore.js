import React, { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "framer-motion";
import "../styles/Explore.css";
import BubbleOne from "../images/Bubble_1.png";
import BubbleTwo from "../images/Bubble_2.png";
import BubbleThree from "../images/Bubble_3.png";
import Pc from "../images/Pc.png";

const headerVar = {
  initial: {
    width: null,
  },
  animate: {
    width: "30%",
    transition: {
      duration: 10,
    },
  },
};

export default function Explore() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  useEffect(() => {
    if (inView) {
      controls.start("animate");
      console.log("inView");
    }
  }, [controls, inView]);
  return (
    <div className="explore">
      <div className="explore__left">
        <div className="explore__left__img">
          <img src={BubbleOne} alt="Bubble One" className="bubble-one" />
          <img src={BubbleThree} alt="Bubble Three" className="bubble-three" />
          <img src={BubbleTwo} alt="Bubble Two" className="bubble-two" />
        </div>
        <div className="explore__left__body">
          <h1>
            Explore and browse top world news at the speed of light. Download
            and enjoy a 30 days free trial
          </h1>
          <div className="explore__left__button">Download</div>
        </div>
      </div>
      <div className="explore__right">
        <motion.div
          ref={ref}
          variants={headerVar}
          initial={"initial"}
          animate={controls}
          className="explore__right__title"
        >
          <h1>Explore</h1>
        </motion.div>
        <img src={Pc} alt="Pc" className="explore__right__img" />
      </div>
    </div>
  );
}
