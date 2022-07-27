import "../styles/Explore.css";
import BubbleOne from "../images/Bubble_1.png";
import BubbleTwo from "../images/Bubble_2.png";
import BubbleThree from "../images/Bubble_3.png";

export default function Explore() {
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
      <div className="explore__right">Right</div>
    </div>
  );
}
