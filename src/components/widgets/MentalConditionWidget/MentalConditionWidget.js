//UI
import Title from "../../ui/Title/Title";
//Style
import "../MentalConditionWidget/MentalConditionWidget.css";

import { useLocation } from "react-router-dom";

function MentalConditionWidget(props) {
  const location = useLocation();
  const { title, img, description } = location.state || {};

  return (
    <>
      <div className="mentalCondition">
        <Title
          className="title"
          img="assets/icons/vector.svg"
          title={title}
        />
        <img className="mentalConditionImage" src={img} />
        <div className="mentalConditionInfo">{description}</div>
      </div>
    </>
  );
}
export default MentalConditionWidget;
