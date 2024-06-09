//Style
import "../ProfileStatusWidget/ProfileStatusWidget.css";

function ProfileStatusWidget(props) {
    return (
        <>
            <div className={`${props.className ? props.className : ''}`}>
                <p className={`profileStatus ${props.style ? props.style : ''}`}>{props.status}
                    <span className={`description ${props.style1 ? props.style1 : ''}`}>{props.description}</span>
                    <span className="description">{props.description1}</span></p>
            </div>
        </>
    )
}
export default ProfileStatusWidget;