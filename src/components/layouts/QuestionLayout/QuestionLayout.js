// UI
import Question from "../../ui/Question/Question";
// Styles
import "../QuestionLayout/QuestionLayout.css";
//Data
import dataQ from "../../../quastionsData.json";
import defaultD from "../../../defaultData.json";
import { useState } from "react";
import AnswerLayout from "../AnswerLayout/AnswerLayout";
import Button from "../../ui/Button/Button";
import { Link } from "react-router-dom";

function QuestionLayout() {
  const [currentQuastion, setCurrentQuastion] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const currentQuestioN = defaultD[currentQuastion];

  const handleNextQuestion = () => {
    if (currentQuastion < defaultD.length - 1) {
      setCurrentQuastion(currentQuastion + 1);
    } else {
      setIsComplete(true);
    }
  };
  const handleMoodCardClick = () => {
    handleNextQuestion();
  };


  return (
    <div className="container">
      <div>
        {isComplete ? (
          <>
             <Question />
             <p className="textP">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <div className="footer">
                <span className="text">за да ги искористите сите бенефити од апликацијата ве молиме</span>
                <Link to={"/login"}><Button classname="btnLogin" content={"најавете се"}/></Link>
            </div>
             <div className="bigLine"></div>
          </>
        ) : (
          <>
          <div key={currentQuestioN.id} onClick={() => handleNextQuestion()}>
            <Question submain={currentQuestioN.quation} />
          </div>
          <div className="bigLine"></div>
          <div onClick={() => handleMoodCardClick()}>
            <AnswerLayout answerOne={currentQuestioN.answer1} answerTwo={currentQuestioN.answer2} answerThree={currentQuestioN.answer3} />
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default QuestionLayout;
