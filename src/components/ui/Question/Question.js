// Styles
import '../Question/Question.css';

function Question (props) {
    return(
        <div className='questionBox'>
            <img src="assets/icons/vector.svg" alt='vector icon'></img>
            <p className='quastion'>{props.submain}</p>
            <h3 style={props.style ? props.style : null} className={props.classname ? props.classname : null}>{props.main}</h3>
        </div>
    )
}

export default Question;