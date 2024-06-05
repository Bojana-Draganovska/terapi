// Widget
import { Link, useLocation, useParams } from "react-router-dom";
import MoodCard from "../../widgets/MoodCard/MoodCard";
// Styles
import "../MoodCardsLayout/MoodCardsLayout.css";
import { useEffect, useState } from "react";
import data from "../../../dataSrc.json";
import dataQ from "../../../quastionsData.json";

function MoodCardsLayout(props) {
  const location = useLocation();
  const [mentalCondition, setMentalConditions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    if(location.pathname === '/mental-health'){
      location.pathname = '/health-selected';
      const mentalData = data.filter(item => item.id >= 0 && item.id <= 2); 
      setMentalConditions(mentalData);
    } else if(location.pathname === '/breathing'){
      location.pathname = '/breathing-tech';
      const mentalData = data.filter(item => item.id >= 3 && item.id <= 5); 
      setMentalConditions(mentalData);
    } else if(location.pathname === '/'){
      const mentalData = dataQ.filter(item => item.id === 0 || item.id === 1 || item.id === 2);
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
  const handleMoodCardClick = (id) => {
    setSelectedAnswers({...selectedAnswers, [id]: id});
    props.onMoodCardClick(id);
  };
    return (
      <div className="mainMoodCards">
        {mentalCondition.map((card) => (
          <div key={card.id}>
            {location.pathname ==='/' ? (
              <div onClick={() => handleMoodCardClick(card.id)}><MoodCard {...getMoodCardProps(card.id)}/></div>
            ) : (
              <Link key={card.id} to={`${location.pathname}/${card.title}`}><MoodCard {...getMoodCardProps(card.id)} /></Link>
            )}
          </div>
        ))}
      </div>
    );
 }

export default MoodCardsLayout;
