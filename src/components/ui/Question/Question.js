// Styles
import { useFont } from '../../../context/FontContext';
import '../Question/Question.css';

function Question (props) {
    const { fontSize, defaultSizes, fontFamily } = useFont();
    const componentSize = fontSize || defaultSizes.question;

    const style = {
        fontSize: componentSize,
        fontFamily: fontFamily,
    };
    return(
        <div className='questionBox'>
            <img src="assets/icons/vector.svg" alt='vector icon'></img>
            <p style={style} className='quastion'>{props.submain}</p>
            <h3 style={style} className={props.classname ? props.classname : null}>{props.main}</h3>
        </div>
    )
}

export default Question;