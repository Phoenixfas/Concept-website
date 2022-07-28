import "../styles/Home.css";
import Map from "../images/Map.png";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 2,
      type: "spring",
    },
  },
};

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="nav">
        <div className="nav__left">
          <span>AFRIOPIA</span>
        </div>
        <div className="nav__right">
          <div className="nav__right__items">
            <a href="#home" className="active">
              Home
            </a>
            <a href="#explore">Explore</a>
            <a href="#trending">Trending</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav__right__btn">Download</div>
        </div>
      </div>
      <div className="home__left">
        <motion.img
          variants={variants}
          initial={"initial"}
          animate={"animate"}
          src={Map}
          alt="map"
          className="home__left__img"
        />
      </div>
      <div className="home__right">
        <h1>Connecting Africa With The World With One Click</h1>
      </div>
    </div>
  );
}
