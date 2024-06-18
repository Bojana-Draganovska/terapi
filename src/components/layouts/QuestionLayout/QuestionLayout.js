// UI
import Question from "../../ui/Question/Question";
// Styles
import "../QuestionLayout/QuestionLayout.css";
//Data
import defaultD from "../../../defaultData.json";
import resultData from "../../../resultData.json";
import { useState } from "react";
import AnswerLayout from "../AnswerLayout/AnswerLayout";
import Button from "../../ui/Button/Button";
import { Link } from "react-router-dom";

function QuestionLayout() {
  const [currentQuastion, setCurrentQuastion] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [answers, setAnswers] = useState([]);
  const currentQuestioN = defaultD[currentQuastion];

  const handleNextQuestion = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuastion < defaultD.length - 1) {
      setCurrentQuastion(currentQuastion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const calculateResult = () => {
    const counts = { easy: 0, medium: 0, hard: 0 };
    answers.forEach(answer => {
      if (answer === "easy") counts.easy++;
      else if (answer === "medium") counts.medium++;
      else if (answer === "hard") counts.hard++;
    });

    
    if (counts.hard > counts.medium && counts.hard > counts.easy) {
      return resultData[2];
    } else if (counts.medium > counts.easy) {
      return resultData[1]; 
    } else {
      return resultData[0]; 
    }
  };

  const result = isComplete ? calculateResult() : null;

  return (
    <div className="container">
      <div>
        {isComplete ? (
          <>
             <Question />
             <p className="textP">{result.finalDescription}</p>
             <div className="footer">
                <span className="text">за да ги искористите сите бенефити од апликацијата ве молиме</span>
                <Link to={"/login"}><Button classname="btnLogin" content={"најавете се"}/></Link>
            </div>
             <div className="bigLine1"></div>
          </>
        ) : (
          <>
          <div key={currentQuestioN.id}>
            <Question submain={currentQuestioN.quation} />
          </div>
          <div className="bigLine"></div>
          <AnswerLayout answers={[{ text: currentQuestioN.answer1, value: "easy" },{ text: currentQuestioN.answer2, value: "medium" },{ text: currentQuestioN.answer3, value: "hard" }]} onAnswerClick={handleNextQuestion} />
          </>
        )}
      </div>
    </div>
  );
}

export default QuestionLayout;
