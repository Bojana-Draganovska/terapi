//Style
import ProfileStatusWidget from "../../widgets/ProfileStatusWidget/ProfileStatusWidget";
import "../ProfileStatusLayout/ProfileStatusLayout.css";

function ProfileStatusLayout(props) {
    return (
        <div className="profileStatusLayout">
            <img className="imgFrame1" src="assets/images/frame.jpg" alt="imgFrame1"/>
            <ProfileStatusWidget status={props.status1} />
            <img className="imgFrame2" src="assets/images/frame.jpg" alt="imgFrame2"/>
            <ProfileStatusWidget status={props.status2} />
            <img className="imgFrame3" src="assets/images/frame.jpg" alt="imgFrame3"/>
            <ProfileStatusWidget status={props.status3} />
        </div>
    )
}
export default ProfileStatusLayout;