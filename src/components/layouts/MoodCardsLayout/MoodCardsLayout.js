// Widget
import { Link } from 'react-router-dom';
import MoodCard from '../../widgets/MoodCard/MoodCard';
// Styles
import '../MoodCardsLayout/MoodCardsLayout.css';
import { useEffect, useState } from "react";

function MoodCardsLayout(props) {

  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    fetchWidgets();
  }, []);

  const fetchWidgets = async (id) => {
    try {
      const response = await fetch(`/data/${id}.json`);
      const data = await response.json();
      setWidgets(data);
    } catch (error) {
      console.error('Error fetching widgets data:', error);
    }
  };

  // <MoodCard fakeData={props.fakeData[0].title} img={props.anxietyimg} />
  return (
    <div className="mainMoodCards">
      <Link to={`/health-selected/${widgets.id}`}><MoodCard feel={props.anxietyfeel} img={props.anxietyimg} /></Link>
      <MoodCard feel={props.angerfeel} img={props.angerimg} />
      <MoodCard feel={props.depressionfeel} img={props.depressionimg} />
    </div>
  );
}

export default MoodCardsLayout;
