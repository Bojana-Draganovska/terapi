// React
import { Link, useParams, useLocation } from "react-router-dom";
// Styles
import "../MoodCard/MoodCard.css";
import { useState, useEffect } from "react";

function MoodCard(props) {
  return (
    <div className="moodCard" onClick={props.handleClick}>
      <div className="moodCardText">
        <p className="imfeeling">{props.imfeeling}</p>
        <span className="feel">{props.feel}</span>
      </div>
      <img src={props.img} alt="emotion icon"></img>
    </div>
  );
}

export default MoodCard;
