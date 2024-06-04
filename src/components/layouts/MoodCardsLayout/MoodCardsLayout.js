// Widget
import { Link, useLocation, useParams } from "react-router-dom";
import MoodCard from "../../widgets/MoodCard/MoodCard";
// Styles
import "../MoodCardsLayout/MoodCardsLayout.css";
import { useEffect, useState } from "react";
import data from "../../../dataSrc.json";

function MoodCardsLayout(props) {
  const location = useLocation();
  const [mentalCondition, setMentalConditions] = useState([]);

  useEffect(() => {
    if(location.pathname === '/mental-health'){
      location.pathname = '/health-selected';
      const mentalData = data.filter(item => item.id >= 0 && item.id <= 2); 
      setMentalConditions(mentalData);
    } else if(location.pathname === '/breathing'){
      location.pathname = '/breathing-tech';
      const mentalData = data.filter(item => item.id >= 3 && item.id <= 5); 
      setMentalConditions(mentalData);
    }
  }, [location]);

  const getMoodCardProps = (id) => {
    switch(id){
      case 0:
      case 3:
        return {feel: props.anxietyfeel, img: props.anxietyimg};
      case 1:
      case 4:
        return {feel: props.angerfeel, img: props.angerimg};
      case 2:
      case 5:
        return { feel: props.depressionfeel, img: props.depressionimg };
      default:
        return{};
    }
  }
    return (
      <div className="mainMoodCards">
        {mentalCondition.map((card) => (
          <Link key={card.id} to={`${location.pathname}/${card.title}`}><MoodCard {...getMoodCardProps(card.id)} /></Link>
        ))}
      </div>
    );
 }

export default MoodCardsLayout;
