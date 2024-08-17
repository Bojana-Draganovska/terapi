// React
import { Link, useParams, useLocation } from "react-router-dom";
// Styles
import "../MoodCard/MoodCard.css";
import { useState, useEffect } from "react";
import { useFontSize } from "../../../context/FontSizeContext";

function MoodCard(props) {
  const {fontSize} = useFontSize();
  return (
    <div className="moodCard" onClick={props.handleClick}>
      <div className="moodCardText">
        <p className="imfeeling" style={{fontSize}}>{props.imfeeling}</p>
        <span className="feel" style={{fontSize}}>{props.feel}</span>
      </div>
      <img src={props.img} alt="emotion icon"></img>
    </div>
  );
}

export default MoodCard;
