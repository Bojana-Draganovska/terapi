// UI
import NavBar from "../../components/ui/NavBar/NavBar";
import Question from "../../components/ui/Question/Question";
// Layouts
import MoodCardsLayout from "../../components/layouts/MoodCardsLayout/MoodCardsLayout";
// Styles
import "../MentalHealth/MentalHealth.css";

function MentalHealth() {
  return (
    <>
      <NavBar />
      <Question submain={"се борам со"} main={""} />
        <MoodCardsLayout
          anxietyfeel={"Aнксиозност"}
          anxietyimg={"assets/icons/anxiety.svg"}
          angerfeel={"Менаџирање на гневот"}
          angerimg={"assets/icons/anger.svg"}
          depressionfeel={"Депресија"}
          depressionimg={"assets/icons/depression.svg"}
        />
    </>
  );
}

export default MentalHealth;
