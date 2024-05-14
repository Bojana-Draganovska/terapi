//React
import { useState } from "react";
// UI
import NavBar from "../../components/ui/NavBar/NavBar";
import Question from "../../components/ui/Question/Question";
// Layouts
import MoodCardsLayout from "../../components/layouts/MoodCardsLayout/MoodCardsLayout";
// Data
import data from "../../data.json"
// Styles
import "../MentalHealth/MentalHealth.css";

function MentalHealth() {
  // const [fakeData, setFakeData] = useState(data);
  // console.log(fakeData);

  // <MoodCardsLayout fakeData = {fakeData} setFakeData={setFakeData}/>
  return (
    <>
      <NavBar />
      <Question submain={"се борам со"} main={""} />
      <MoodCardsLayout
        anxietyfeel={"Aнксиозност"}
        anxietyimg={"assets/icons/anxiety.svg"}
        angerfeel={"Изгубено"}
        angerimg={"assets/icons/lost.svg"}
        depressionfeel={"Депресија"}
        depressionimg={"assets/icons/depression.svg"} />
    </>
  );
}

export default MentalHealth;
