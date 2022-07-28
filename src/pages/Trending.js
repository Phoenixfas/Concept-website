import "../styles/Trending.css";
import Abrehot from "../images/posts/abrehot.png";
import Ai from "../images/posts/ai.jpg";
import Cable from "../images/posts/cable.jpg";
import Drone from "../images/posts/drone.jpg";
import Museum from "../images/posts/museum.png";
import Robot from "../images/posts/robot.jpg";
import Rocket from "../images/posts/rocket.png";

export default function Trending() {
  //   const alert = () => {
  //     setTimeout(window.alert("This is a test"), 3000);
  //   };
  return (
    <div className="trending" id="trending">
      <div className="trending__header">
        <h1>Trending</h1>
      </div>
      <div className="trending__slideContainer">
        <span className="slider-span" id="slider-span1"></span>
        <span className="slider-span" id="slider-span2"></span>
        <span className="slider-span" id="slider-span3"></span>
        <span className="slider-span" id="slider-span4"></span>
        <span className="slider-span" id="slider-span5"></span>
        <span className="slider-span" id="slider-span6"></span>
        <span className="slider-span" id="slider-span7"></span>

        <div className="image-slider">
          <div className="slides-div" id="slide-1">
            <img src={Abrehot} alt="abrehot" className="img" id="img1" />
            <a href="#slider-span1" className="button" id="button-1">
              {" "}
            </a>
            <p className="text" id="text-1">
              Grand Opening Of The Biggest Library In Africa - Abrehot
            </p>
          </div>
          <div className="slides-div" id="slide-2">
            <img src={Ai} alt="ai" className="img" id="img2" />
            <a href="#slider-span2" className="button" id="button-2">
              {" "}
            </a>
            <p className="text" id="text-2">
              The Future Of Artificial Intelligence In Africa
            </p>
          </div>
          <div className="slides-div" id="slide-3">
            <img src={Cable} alt="cable" className="img" id="img3" />
            <a href="#slider-span3" className="button" id="button-3">
              {" "}
            </a>
            <p className="text" id="text-3">
              Japan Has Broken The Internet Speed
            </p>
          </div>
          <div className="slides-div" id="slide-4">
            <img src={Drone} alt="drone" className="img" id="img4" />
            <a href="#slider-span4" className="button" id="button-4">
              {" "}
            </a>
            <p className="text" id="text-4">
              Drones For Agriculture In Africa
            </p>
          </div>
          <div className="slides-div" id="slide-5">
            <img src={Museum} alt="museum" className="img" id="img5" />
            <a href="#slider-span5" className="button" id="button-5">
              {" "}
            </a>
            <p className="text" id="text-5">
              The New State of The Art Science And Technology Museum In Africa
            </p>
          </div>
          <div className="slides-div" id="slide-6">
            <img src={Robot} alt="robot" className="img" id="img6" />
            <a href="#slider-span6" className="button" id="button-6">
              {" "}
            </a>
            <p className="text" id="text-6">
              5G Robot First Appearance In Addis, Ethiopia
            </p>
          </div>
          <div className="slides-div" id="slide-7">
            <img src={Rocket} alt="rocket" className="img" id="img7" />
            <a href="#slider-span7" className="button" id="button-7">
              {" "}
            </a>
            <p className="text" id="text-7">
              Ethiopia Launches Its First Remote Sensing Satellite - ETRSS-1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
