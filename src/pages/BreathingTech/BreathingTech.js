// React
import { useState, useEffect } from "react";
// UI
import NavBar from "../../components/ui/NavBar/NavBar";
import Question from "../../components/ui/Question/Question";
import MoodCard from "../../components/widgets/MoodCard/MoodCard";
// Layouts
import MoodCardsLayout from "../../components/layouts/MoodCardsLayout/MoodCardsLayout";
// Styles
import "../BreathingTech/BreathingTech.css";

function BreathingTech() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (
    <>
      <NavBar />
      <Question
        submain={
          "Откријте спокој во секое вдишување. Испробајте ги нашите успокојувачки техники на дишење за момент на"
        }
        main={"тишина среде хаосот."}
        style={{color: '#0989FF'}}
        classname={"breathSpan"}
      />
      <div className="breathing-options">
      {data.slice(3,6).map((item) => 
        <MoodCard feel={item.title} img={item.icon}/>
      ) }
      </div>
    </>
  );
}

export default BreathingTech;
