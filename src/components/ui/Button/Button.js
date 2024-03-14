// Styles
import '../Button/Button.css';

function Button(props) {
return (
    <button className={props.classname ? props.classname : null}>
        {props.content}
    </button>
)
}


export default Button;