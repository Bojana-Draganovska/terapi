// Styles
import { useFont } from '../../../context/FontContext';
import '../Question/Question.css';

function Question (props) {
    const {styles} = useFont();
    return(
        <div className={`questionBox ${props.className ? props.className : ''}`}>
            <img src="assets/icons/vector.svg" alt='vector icon'></img>
            <p style={{fontSize: styles.question.fontSize, fontFamily: styles.question.fontFamily, color: styles.question.color, backgroundColor: styles.question.backgroundColor}} className={`quastion ${props.className ? props.className : ''}`}>{props.submain}</p>
            <h3 style={{fontSize: styles.question.fontSize, fontFamily: styles.question.fontFamily, color: styles.question.color, backgroundColor: styles.question.backgroundColor}} className={props.classname ? props.classname : null}>{props.main}</h3>
        </div>
    )
}

export default Question;