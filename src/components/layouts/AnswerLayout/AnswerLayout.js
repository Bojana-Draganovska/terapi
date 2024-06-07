//Style
import AnswerCard from "../../widgets/AnswerCard/AnswerCard";
import "../AnswerLayout/AnswerLayout.css";

function AnswerLayout(props){
    return(
        <div className="answerMoodCards">
            <AnswerCard answer={props.answerOne}/>
            <AnswerCard answer={props.answerTwo}/>
            <AnswerCard answer={props.answerThree}/>
        </div>
    )
}
export default AnswerLayout;