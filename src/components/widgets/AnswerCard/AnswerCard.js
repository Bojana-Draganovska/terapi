//Style
import { useFontSize } from "../../../context/FontSizeContext";
import "../AnswerCard/AnswerCard.css";

function AnswerCard({answer, onClick}) {
    const {fontSize} = useFontSize();
    return (
        <div className="answerCard" onClick={() => onClick(answer)}>
            <div className="answerCardText">
                <p className="answer" style={{fontSize}}>{answer}</p>
            </div>
        </div>
    )
}
export default AnswerCard;