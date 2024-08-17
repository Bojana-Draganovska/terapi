//Style
import { useFont } from "../../../context/FontContext";
import "../AnswerCard/AnswerCard.css";

function AnswerCard({answer, onClick}) {
    const {fontSize, fontFamily} = useFont();
    return (
        <div className="answerCard" onClick={() => onClick(answer)}>
            <div className="answerCardText">
                <p className="answer" style={{fontSize, fontFamily}}>{answer}</p>
            </div>
        </div>
    )
}
export default AnswerCard;