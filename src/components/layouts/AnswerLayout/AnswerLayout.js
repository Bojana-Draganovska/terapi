//Style
import AnswerCard from "../../widgets/AnswerCard/AnswerCard";
import "../AnswerLayout/AnswerLayout.css";

function AnswerLayout({answers, onAnswerClick}){
    return(
        <div className="answerMoodCards">
            {answers.map((answer, index) => (
                <AnswerCard key={index} answer={answer.text} onClick={() => onAnswerClick(answer.value)}/>
            ))}
        </div>
    )
}
export default AnswerLayout;