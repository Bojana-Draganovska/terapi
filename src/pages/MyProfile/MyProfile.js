//Style
import ProfileStatusLayout from "../../components/layouts/ProfileStatusLayout/ProfileStatusLayout";
import NavBar from "../../components/ui/NavBar/NavBar";
import ProfileStatusWidget from "../../components/widgets/ProfileStatusWidget/ProfileStatusWidget";
import "../MyProfile/MyProfile.css";

function MyProfile() {
    return (
        <>
            <NavBar />
            <div className="profileContainer">
                <ProfileStatusWidget className="profileWidgetStatus"/>
                <ProfileStatusLayout
                    status1={"Твојот прогерс во борбата со Анксиозноста"}
                    status2={"Твојот прогрес во борбата со Менаџирање со гневот"}
                    status3={"Твојот прогрес во борбата со Депресија"} />
            </div>
        </>
    )
}
export default MyProfile;