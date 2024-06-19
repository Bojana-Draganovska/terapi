//UI
import Button from "../../ui/Button/Button";
//Widget
import BreathingConditionWidget from "../../widgets/BreathingConditionWidget/BreathingConditionWidget";
//Style
import "../BreathingConditionLayout/BreathingConditionLayout.css"
//Data
import data from "../../../dataSrc.json";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../../config/firebase";

function BreathingConditionLayout() {
    const { title } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [currentCondition, setCurrentCondition] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        const condition = data.find(item => item.title === title);
        if (condition) {
            setCurrentCondition(condition);
        }
    }, [title]);

    const getVideoSrc = (title) => {
        switch(title) {
            case "Box Breathing":
                return "assets/video/Box_Breathing.mp4";
            case "4-7-8 Breathing":
                return "assets/video/4-7-8_Breathing.mp4";
            case "Deep Belly Breathing":
                return "assets/video/Deep_Belly_Breathing.mp4";
            default:
                return null;
        }
    };

    const handleTryItClick = () => {
        if (currentCondition) {
            const videoSrc = getVideoSrc(currentCondition.title);
            if (videoSrc) {
                navigate('/video-breath', { state: { videoSrc, condition: currentCondition } });
            }
        }
    };


    const isProfilePage = location.pathname === '/my-profile';

    return (
        <>
            {currentCondition && (
                <BreathingConditionWidget title={currentCondition.title} image={currentCondition.image} description={currentCondition.description} />
            )}
            {!user ? (
                <div className="footer">
                    <span className="text">за да ги искористите сите бенефити од апликацијата ве молиме</span>
                    <Link to={"/login"}><Button classname="btnLogin" content={"најавете се"} /></Link>
                </div>
            ) : (
                <Button classname="btnLogin1" content={"Пробај си"} onClick={handleTryItClick}/>
            )}
        </>
    )
}
export default BreathingConditionLayout;