//UI
import { useParams } from "react-router-dom";
import Title from "../../ui/Title/Title";
//Style
import "../MentalConditionWidget/MentalConditionWidget.css"
import { useEffect, useState } from "react";
import data from "../../../data.json"

function MentalConditionWidget() {
  const {widgetId} = useParams();
  const [widgetData, setWidgetData] = useState([]);

  // useEffect(() => {
  //   fetchWidgetData(widgetId);
  // }, [widgetId]);

  useEffect(() =>{
    setWidgetData(data);
  })
  // const fetchWidgetData = async (id) => {
  //   try {
  //     const response = await fetch(`/data/${id}.json`);
  //     const data = await response.json();
  //     setWidgetData(data);
  //   } catch (error) {
  //     console.error('Error fetching widget data:', error);
  //   }
  console.log(widgetData);
  // };
    return (
        <>
            <Title className="title" img="assets/icons/vector.svg" title={widgetData.title} />
            {widgetData && (
              <div className="mentalCondition">
                <img className="mentalConditionImage" src={widgetData.img} />
                <div className="mentalConditionInfo">{widgetData.descriptipon}</div>
            </div>
            )}
        </>
    )
}
export default MentalConditionWidget;