// UI
import NavBar from "../../components/ui/NavBar/NavBar";
import Question from "../../components/ui/Question/Question";
// Layouts
import MoodCardsLayout from "../../components/layouts/MoodCardsLayout/MoodCardsLayout";
import QuestionLayout from "../../components/layouts/QuestionLayout/QuestionLayout";
// Styles
import "./HomePage.css";

function HomePage() {
  return (
    <div className="container">
      <NavBar />
      <div>
        {/* {if()} */}
      {/* <Question submain={'Дозволете ни да ве водиме'} main={'Како се чуствуваш?'}/>
      <MoodCardsLayout
          anxietyfeel={"Aнксиозност"}
          anxietyimg={"assets/icons/anxiety.svg"}
          angerfeel={"Изгубено"}
          angerimg={"assets/icons/lost.svg"}
          depressionfeel={"Депресија"}
          depressionimg={"assets/icons/depression.svg"} */}
        {/* /> */}
        {/* {else()} */}
        <QuestionLayout />
        </div>
    </div>
  );
}

export default HomePage;
