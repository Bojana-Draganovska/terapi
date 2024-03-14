// UI
import NavBar from "../../components/ui/NavBar/NavBar";
import Question from "../../components/ui/Question/Question";
// Layouts
import MoodCardsLayout from "../../components/layouts/MoodCardsLayout/MoodCardsLayout";
// Styles
import "../BreathingTech/BreathingTech.css";

function BreathingTech() {
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
      <MoodCardsLayout
        anxietyfeel={"Deep Belly Breathing (Diaphragmatic Breathing)"}
        anxietyimg={"assets/icons/deepbelly.svg"}
        angerfeel={"4-7-8 Breathing"}
        angerimg={"assets/icons/478breathing.svg"}
        depressionfeel={"Box Breathing (Square Breathing)"}
        depressionimg={"assets/icons/boxbreathing.svg"}
      />
    </>
  );
}

export default BreathingTech;
