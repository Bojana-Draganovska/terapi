//React
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// UI
import NavBar from "../../components/ui/NavBar/NavBar";
import Question from "../../components/ui/Question/Question";
// Widgets
import MoodCard from "../../components/widgets/MoodCard/MoodCard";
// Layouts
import MoodCardsLayout from "../../components/layouts/MoodCardsLayout/MoodCardsLayout";
// Styles
import "../MentalHealth/MentalHealth.css";

function MentalHealth() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

 
  return (
    <>
      <NavBar />
      <Question submain={"се борам со"} main={""} />
      <div className="mental-health-options">
      <MoodCardsLayout
        anxietyfeel={"Aнксиозност"}
        anxietyimg={"assets/icons/anxiety.svg"}
        angerfeel={"Менаџирање со гневот"}
        angerimg={"assets/icons/anger.svg"}
        depressionfeel={"Депресија"}
        depressionimg={"assets/icons/depression.svg"} />
      </div>
    </>
  );
}

export default MentalHealth;
