// Styles
import '../Input/Input.css';

function Input(props) {
return (
    <label>
        {props.labelname}
    <input className={`${props.className ? props.className : ''}`} type={props.typename} id={props.id} name={props.inputname} placeholder={props.placeholder} value={props.value} onChange={props.onChange}></input>
    </label>
)
}


export default Input;