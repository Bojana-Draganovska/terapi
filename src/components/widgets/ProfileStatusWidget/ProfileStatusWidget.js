//Style
import "../ProfileStatusWidget/ProfileStatusWidget.css";

function ProfileStatusWidget(props) {
    return (
        <>
            <div className={`${props.className ? props.className : ''}`}>
                <p className={`profileStatus ${props.style ? props.style : ''}`}>{props.status}</p>
                <p className={`${props.style1 ? props.style1 : ''}`}>{props.description}</p>
            </div>
        </>
    )
}
export default ProfileStatusWidget;