// Widget
import { Link, useParams } from "react-router-dom";
import MoodCard from "../../widgets/MoodCard/MoodCard";
// Styles
import "../MoodCardsLayout/MoodCardsLayout.css";
import { useEffect, useState } from "react";

function MoodCardsLayout(props) {
 
  return (
    <div className="mainMoodCards">
      {/* {filteredData1.map((card1) => (
          <Link to={`/health-selected/${card1.title}`} key={card1.id}><MoodCard feel={props.anxietyfeel} img={props.anxietyimg} /></Link>
      ))}
      {filteredData2.map((card2) => (
        <Link to={`/health-selected/${card2.title}`} key={card2.id}><MoodCard feel={props.angerfeel} img={props.angerimg} /></Link>
      ))}
      {filteredData3.map((card3) => (
        <Link to={`/health-selected/${card3.title}`} key={card3.id}><MoodCard feel={props.depressionfeel} img={props.depressionimg} /></Link>
      ))} */}
    </div>
  );
}

export default MoodCardsLayout;
