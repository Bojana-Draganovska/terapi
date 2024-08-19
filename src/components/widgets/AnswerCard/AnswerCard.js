//Style
import { useFont } from "../../../context/FontContext";
import "../AnswerCard/AnswerCard.css";

function AnswerCard({answer, onClick}) {
    const {styles} = useFont();
    return (
        <div className="answerCard" style={{backgroundColor: styles.widget.backgroundColor}} onClick={() => onClick(answer)}>
            <div className="answerCardText">
                <p className="answer" style={{fontSize: styles.widget.fontSize, fontFamily: styles.widget.fontFamily, color: styles.widget.color}}>{answer}</p>
            </div>
        </div>
    )
}
export default AnswerCard;