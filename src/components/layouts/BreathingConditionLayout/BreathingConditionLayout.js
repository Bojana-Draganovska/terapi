//UI
import Button from "../../ui/Button/Button";
//Widget
import BreathingConditionWidget from "../../widgets/BreathingConditionWidget/BreathingConditionWidget";
//Style
import "../BreathingConditionLayout/BreathingConditionLayout.css"
//Data
import data from "../../../dataSrc.json";
import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../../config/firebase";

function BreathingConditionLayout() {
    const { title } = useParams();
    const location = useLocation();
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

    const isProfilePage = location.pathname === '/my-profile';

    return (
        <>
            {currentCondition && (
                <BreathingConditionWidget title={currentCondition.title} image={currentCondition.image} description={currentCondition.description} />
            )}
            {!user && (
                <div className="footer">
                    <span className="text">за да ги искористите сите бенефити од апликацијата ве молиме</span>
                    <Link to={"/login"}><Button classname="btnLogin" content={"најавете се"} /></Link>
                </div>
            )}
        </>
    )
}
export default BreathingConditionLayout;