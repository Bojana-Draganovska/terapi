//Style
import { useState } from "react";
import ProfileStatusLayout from "../../components/layouts/ProfileStatusLayout/ProfileStatusLayout";
import NavBar from "../../components/ui/NavBar/NavBar";
import ProfileStatusWidget from "../../components/widgets/ProfileStatusWidget/ProfileStatusWidget";
import "../MyProfile/MyProfile.css";

function MyProfile() {
    const [currentShowStatus, setCurrentShowStatus] = useState(true);
    const [fontSizes, setFontSizes] = useState({navbar: '16px', button: '16px', title: '24px',});
    // const [fontSizesState, setFontSizesState] = useState(fontSizes);

    const handleCurrentStatus = () => {
        setCurrentShowStatus(false);
    }

    return (
        <>
            <div className="profileContainer">
                {currentShowStatus ? (
                    <>
                        <ProfileStatusLayout
                            status1={"Твојот прогрес во борбата со Анксиозност"}
                            status2={"Твојот прогрес во борбата со Менаџирање со гневот"}
                            status3={"Твојот прогрес во борбата со Депресија"}
                            onClickStatusShow={handleCurrentStatus} />
                    </>
                ) : (
                    <ProfileStatusLayout/>
                )}

            </div>
        </>
    )
}
export default MyProfile;