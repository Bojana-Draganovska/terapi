// Styles
import { Link } from "react-router-dom";
import "../MoodCard/MoodCard.css";


function MoodCard(props) {
  return (
    <div className="moodCard" onClick={() => console.log("clicked")}>
      <div className="moodCardText">
        <p className="imfeeling">{props.imfeeling}</p>
        <span className="feel">{props.feel}</span>
      </div>
      <img src={props.img} alt="emotion icon"></img>
    </div>
  );
}

export default MoodCard;
