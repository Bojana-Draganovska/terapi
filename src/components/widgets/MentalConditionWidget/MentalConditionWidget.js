//UI
import Title from "../../ui/Title/Title";
//Style
import "../MentalConditionWidget/MentalConditionWidget.css"

function MentalConditionWidget(props) {

  const descriptionParagraphs = props.description.split('\n').map((text, index) => (
    <p key={index}>{text}</p>
  ));
  return (
    <>
    <Title className="title" img="/assets/icons/vector.svg" title={props.title} />
      <div className="mentalCondition">
        <img className="mentalConditionImage" src={props.image} alt={props.title}/>
        <div className="mentalConditionInfo">{descriptionParagraphs}</div>
      </div>
    </>
  );
}
export default MentalConditionWidget;
