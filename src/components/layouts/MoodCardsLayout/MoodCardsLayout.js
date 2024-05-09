// Widget
import MoodCard from '../../widgets/MoodCard/MoodCard';
// Styles
import '../MoodCardsLayout/MoodCardsLayout.css';

function MoodCardsLayout(props) {
  return (
    <div className="mainMoodCards">
      <MoodCard fakeData={props.fakeData[0].title} img={props.anxietyimg} />
      <MoodCard feel={props.angerfeel} img={props.angerimg} />
      <MoodCard feel={props.depressionfeel} img={props.depressionimg} />
    </div>
  );
}

export default MoodCardsLayout;
