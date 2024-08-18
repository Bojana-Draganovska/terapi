//Style
import { useFont } from "../../../context/FontContext";
import "../AnswerCard/AnswerCard.css";

function AnswerCard({answer, onClick}) {
    const {styles} = useFont();
    return (
        <div className="answerCard" onClick={() => onClick(answer)}>
            <div className="answerCardText">
                <p className="answer" style={{fontSize: styles.moodcard.fontSize, fontFamily: styles.moodcard.fontFamily, color: styles.moodCard.color, backgroundColor: styles.moodCard.backgroundColor}}>{answer}</p>
            </div>
        </div>
    )
}
export default AnswerCard;