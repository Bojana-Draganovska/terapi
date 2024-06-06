//Style
import "../ProfileStatusWidget/ProfileStatusWidget.css";

function ProfileStatusWidget(props) {
    return (
        <>
            <div className={`${props.className ? props.className : ''}`}>
                <p className="profileStatus">{props.status}</p>
            </div>
        </>
    )
}
export default ProfileStatusWidget;