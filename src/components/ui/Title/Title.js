// Styles
import '../Title/Title.css';

function Title(props) {
return (
    <div className={`title ${props.className ? props.className : ''}`}>
        <img src={props.img}></img>
        <h3>{props.title}</h3>
    </div>
)
}


export default Title;