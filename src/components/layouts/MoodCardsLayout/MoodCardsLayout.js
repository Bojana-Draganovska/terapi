// Widget
import MoodCard from '../../widgets/MoodCard/MoodCard';
// Styles
import '../MoodCardsLayout/MoodCardsLayout.css';

function MoodCardsLayout(props) {

  // <MoodCard fakeData={props.fakeData[0].title} img={props.anxietyimg} />
  return (
    <div className="mainMoodCards">
      <MoodCard feel={props.anxietyfeel} img={props.anxietyimg} />
      <MoodCard feel={props.angerfeel} img={props.angerimg} />
      <MoodCard feel={props.depressionfeel} img={props.depressionimg} />
    </div>
  );
}

export default MoodCardsLayout;
