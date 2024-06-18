//UI
import { Link, useParams, useLocation } from "react-router-dom";
import Button from "../../ui/Button/Button";
//Widgets
import MentalConditionWidget from "../../widgets/MentalConditionWidget/MentalConditionWidget";
//Style
import "../MentalConditionLayout/MentalConditionLayout.css"
import NavBar from "../../ui/NavBar/NavBar";
import { useEffect, useState } from "react";
import data from "../../../dataSrc.json";
import { auth } from "../../../config/firebase";

function MentalConditionLayout() {
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
                <MentalConditionWidget title={currentCondition.title} image={currentCondition.image} description={currentCondition.description} />
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
export default MentalConditionLayout;