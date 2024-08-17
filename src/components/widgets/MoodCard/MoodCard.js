// React
import { Link, useParams, useLocation } from "react-router-dom";
// Styles
import "../MoodCard/MoodCard.css";
import { useState, useEffect } from "react";
import { useFont } from "../../../context/FontContext";

function MoodCard(props) {
  const {fontSize, fontFamily} = useFont();
  return (
    <div className="moodCard" onClick={props.handleClick}>
      <div className="moodCardText">
        <p className="imfeeling" style={{fontSize, fontFamily}}>{props.imfeeling}</p>
        <span className="feel" style={{fontSize, fontFamily}}>{props.feel}</span>
      </div>
      <img src={props.img} alt="emotion icon"></img>
    </div>
  );
}

export default MoodCard;
