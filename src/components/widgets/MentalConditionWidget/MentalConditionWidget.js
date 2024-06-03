//UI
import { useParams } from "react-router-dom";
import Title from "../../ui/Title/Title";
//Style
import "../MentalConditionWidget/MentalConditionWidget.css"
import { useEffect, useState } from "react";
import data from "/data.json"

function MentalConditionWidget() {

  // const { title } = useParams();
  // const [card, setCard] = useState([]);

  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const selectedCard = data.find((card) => card.feel === title);
  //       setCard(selectedCard);
  //     })
  //     .catch((error) => console.error("Error fetching data: ", error));
  // }, [title]);

  return (
    <>
      {data && data.map(post => {
       return (
          <div className="mentalCondition">
            <Title className="title" img="assets/icons/vector.svg" title={post.title} />
           <img className="mentalConditionImage" src={post.img} />
          <div className="mentalConditionInfo">{post.descriptipon}</div>
          </div>
      )
  })}
    </>
  )
}
export default MentalConditionWidget;