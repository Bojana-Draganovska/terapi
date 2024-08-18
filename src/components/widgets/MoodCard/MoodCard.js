// React
import { Link, useParams, useLocation } from "react-router-dom";
// Styles
import "../MoodCard/MoodCard.css";
import { useState, useEffect } from "react";
import { useFont } from "../../../context/FontContext";

function MoodCard(props) {
  const {styles} = useFont();
  return (
    <div className="moodCard" onClick={props.handleClick}>
      <div className="moodCardText">
        <p className="imfeeling" style={{fontSize: styles.moodcard.fontSize, fontFamily: styles.moodcard.fontFamily, color: styles.moodcard.color, backgroundColor: styles.moodcard.backgroundColor}}>{props.imfeeling}</p>
        <span className="feel" style={{fontSize: styles.moodcard.fontSize, fontFamily: styles.moodcard.fontFamily, color: styles.moodcard.color, backgroundColor: styles.moodcard.backgroundColor}}>{props.feel}</span>
      </div>
      <img src={props.img} alt="emotion icon"></img>
    </div>
  );
}

export default MoodCard;
