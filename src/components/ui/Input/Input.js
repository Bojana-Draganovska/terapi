// Styles
import '../Input/Input.css';

function Input(props) {
return (
    <label>
        {props.labelname}
    <input type={props.typename} name={props.inputname} placeholder={props.placeholder} value={props.value}></input>
    </label>
)
}


export default Input;