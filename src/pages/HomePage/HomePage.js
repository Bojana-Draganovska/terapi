// UI
import NavBar from "../../components/ui/NavBar/NavBar";
import Question from "../../components/ui/Question/Question";
// Layouts
import MoodCardsLayout from "../../components/layouts/MoodCardsLayout/MoodCardsLayout";
import QuestionLayout from "../../components/layouts/QuestionLayout/QuestionLayout";
// Styles
import "./HomePage.css";
import { useState } from "react";

function HomePage() {
  const [showMoodCards, setShowMoodCards] = useState(true);

  const handleMoodCardClick = () => {
    setShowMoodCards(false);
  }

  console.log(handleMoodCardClick);
  return (
    <div className="container">
      <NavBar />
      <div>
        {showMoodCards ? (
          <>
            <Question submain={'Дозволете ни да ве водиме'} main={'Како се чувствуваш?'} />
            <div className="bigLine"></div>
            <MoodCardsLayout
              anxietyfeel={"Aнксиозност"}
              anxietyimg={"/assets/icons/anxiety.svg"}
              angerfeel={"Изгубено"}
              angerimg={"/assets/icons/lost.svg"}
              depressionfeel={"Депресија"}
              depressionimg={"/assets/icons/depression.svg"}
              onMoodCardClick={handleMoodCardClick}
            />
          </>
        ) : (
          <>
            <QuestionLayout/>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
