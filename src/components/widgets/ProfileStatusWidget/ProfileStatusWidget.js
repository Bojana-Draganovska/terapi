//Style
import "../ProfileStatusWidget/ProfileStatusWidget.css";

function ProfileStatusWidget(props) {
    return (
        <>
            <div className={`profileStatus ${props.className ? props.className : ''}`} poeni={props.poeni}>
            <span className={"points"}>{props.poeni}</span>
            <p className={`${props.style ? props.style : ''}`}>{props.status}</p>
            <span className={`description ${props.naslovPredizvik ? props.naslovPredizvik : ''}`}>{props.description}</span>
            <span className={`description`}>{props.description1}</span>
            <span className={`description`}>{props.description2}</span>
            </div>
        </>
    )
}
export default ProfileStatusWidget;