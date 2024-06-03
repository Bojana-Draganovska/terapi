// Widget
import { Link, useParams } from "react-router-dom";
import MoodCard from "../../widgets/MoodCard/MoodCard";
// Styles
import "../MoodCardsLayout/MoodCardsLayout.css";
import { useEffect, useState } from "react";

function MoodCardsLayout(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json", {
      headers: {
        Accept: "application/json"
      }
    })
    .then((response) => response.json())
    .then((jsonData) => {
      if(jsonData && Array.isArray(jsonData)){
        setData(jsonData);
      } else {
        console.error("Fetched data is not an array");
      }
    })
    .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const filteredData1 = data.filter(item => item.id === 0 || item.id === 3);
  const filteredData2 = data.filter(item => item.id === 1 || item.id === 4);
  const filteredData3 = data.filter(item => item.id === 2 || item.id === 5);
  return (
    <div className="mainMoodCards">
      {filteredData1.map((card1) => (
          <Link to={`/health-selected/${card1.title}`} key={card1.id}><MoodCard feel={props.anxietyfeel} img={props.anxietyimg} /></Link>
      ))}
      {filteredData2.map((card2) => (
        <Link to={`/health-selected/${card2.title}`} key={card2.id}><MoodCard feel={props.angerfeel} img={props.angerimg} /></Link>
      ))}
      {filteredData3.map((card3) => (
        <Link to={`/health-selected/${card3.title}`} key={card3.id}><MoodCard feel={props.depressionfeel} img={props.depressionimg} /></Link>
      ))}
    </div>
  );
}

export default MoodCardsLayout;
