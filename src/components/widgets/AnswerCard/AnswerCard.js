//Style
import "../AnswerCard/AnswerCard.css";

function AnswerCard({answer, onClick}) {
    return (
        <div className="answerCard" onClick={() => onClick(answer)}>
            <div className="answerCardText">
                <p className="answer">{answer}</p>
            </div>
        </div>
    )
}
export default AnswerCard;