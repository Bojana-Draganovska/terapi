//Style
import "../AnswerCard/AnswerCard.css";

function AnswerCard(props) {
    return (
        <div className="answerCard" onClick={() => console.log("S")}>
            <div className="answerCardText">
                <p className="answer">{props.answer}</p>
            </div>
        </div>
    )
}
export default AnswerCard;