//Style
import { useEffect, useState } from "react";
import Button from "../../ui/Button/Button";
import Title from "../../ui/Title/Title";
import ProfileStatusWidget from "../../widgets/ProfileStatusWidget/ProfileStatusWidget";
import "../ProfileStatusLayout/ProfileStatusLayout.css";
import statusData from "../../../status.json";
import Input from "../../ui/Input/Input"
import { Link } from "react-router-dom";

function ProfileStatusLayout(props) {
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedDay, setSelectedDay] = useState(null);
    const [completedDays, setCompletedDays] = useState({});
    const [activePopup, setActivePopup] = useState(null); 
    const categories = ["Анксиозност", "Менаџирање со гнев", "Депресија"];


    const handleTogglePopup = (id) => {
        setActivePopup((prevId) => (prevId === id ? null : id));
    };

    const handleWidgetClick = (index) => {
        let title;
        switch (index) {
            case 0:
                title = "Анксиозност";
                break;
            case 1:
                title = "Менаџирање со гнев";
                break;
            case 2:
                title = "Депресија";
                break;
            default:
                title = "";
        }
        setSelectedTitle(title);
        setSelectedDay(null);
    };

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };


    const filterDataByCategory = (category) => {
        const categoryIndex = categories.indexOf(category);
        if (categoryIndex !== -1) {
            const start = categoryIndex * 7;
            const end = start + 7;
            return statusData.slice(start, end);
        }
        return [];
    };

    const getDayData = (category, day) => {
        const data = filterDataByCategory(category);
        return data.find(item => item.den === `Ден ${day}`);
    };

    const handleCompleteAndBackClick = () => {
        if (selectedDay !== null) {
            setCompletedDays((prev) => ({
                ...prev,
                [selectedTitle]: {
                    ...prev[selectedTitle],
                    [selectedDay]: true,
                },
            }));
            setSelectedDay(null);
        }
    };

    const renderDayData = () => {
        const dayData = getDayData(selectedTitle, selectedDay);
        return dayData ? (
            <div key={dayData.id} className="dayDetail">
                <img className="imgFrame2_1" src="assets/images/frame.jpg" alt="imgFrame2" />
                <ProfileStatusWidget key={dayData.id} className="selectedDayStatus" style="styles" style1="style1" status={dayData.naslov} description={dayData.descrition} />
                <Button classname="btnFinish" content={"завршено"} onClick={handleCompleteAndBackClick} />
            </div>
        ) : (
            <div>Day data not found</div>
        );
    };

    return (
        <>
            {selectedTitle ? (
                <>
                    <Title className="title" img="/assets/icons/vector.svg" title={selectedDay ? `Ден ${selectedDay}` : selectedTitle} />
                    <div className="categoryWidget">
                        {selectedDay ? (
                            <>
                                {renderDayData()}
                            </>
                        ) : (
                            <>
                                {filterDataByCategory(selectedTitle).map((item, index) => {
                                    const day = index + 1;
                                    const isCompleted = completedDays[selectedTitle]?.[day];
                                    return (
                                        <div key={index} className={`categorywidgets ${isCompleted ? 'completed' : ''}`} onClick={() => handleDayClick(day)} style={{ pointerEvents: isCompleted ? 'none' : 'auto' }}>
                                            <img className="imgFrames" src={`/assets/images/frame.jpg`} />
                                            <ProfileStatusWidget key={item.id} className="profileWidgetsStatus" style="styles" status={item.den} />
                                        </div>
                                    );
                                })}
                            </>

                        )}
                        <img className="imgFramee" src={`/assets/images/frame.jpg`} />
                    </div>
                </>
            ) : (
                <>
                    <ProfileStatusWidget className="profileWidgetStatus" />
                    <div className="profileStatusLayout">
                        <div onClick={() => handleWidgetClick(0)}>
                            <img className="imgFrame1" src="assets/images/frame.jpg" alt="imgFrame1" />
                            <ProfileStatusWidget className="styleWidget1" status={props.status1} />
                        </div>
                        <div onClick={() => handleWidgetClick(1)}>
                            <img className="imgFrame2" src="assets/images/frame.jpg" alt="imgFrame2" />
                            <ProfileStatusWidget className="styleWidget2" status={props.status2} />
                        </div>
                        <div onClick={() => handleWidgetClick(2)}>
                            <img className="imgFrame3" src="assets/images/frame.jpg" alt="imgFrame3" />
                            <ProfileStatusWidget className="styleWidget3" status={props.status3} />
                        </div>
                    </div>
                    <div className="buttonsProfile">
                        <Button classname="buttonProfile" content={"Преглед на податоци"} onClick={() => handleTogglePopup(1)} />
                        <Button classname="buttonProfile" content={"Ажурирај податоци"} onClick={() => handleTogglePopup(2)} />
                        <Button classname="buttonProfile" content={"Правила и обврски"} onClick={() => handleTogglePopup(3)} />
                        <Button classname="buttonProfile" content={"Одјава"} onClick={props.handleLogout} />
                    </div>
                    {activePopup === 1 && (
                        <div>
                            <ProfileStatusWidget style="pregledNaPodatoci1" status={"Електронски маил:"} description={"Лозинка:"} />
                        </div>

                    )}
                    {activePopup === 2 && (
                        <div>
                             <ProfileStatusWidget style="pregledNaPodatoci2" status={"Електронски маил:"} description={"Стара лозинка:"} description1={"Нова лозинка:"}/>
                                <Input className="input1" typename={'text'} placeholder={"Внесето го твојот електронски маил:"}></Input>
                                <Input className="input2" typename={'password'} placeholder={"Внеси ја твојата лозинка"}></Input>
                                <Input className="input3" typename={'password'} placeholder={"Внеси ја новата лозинка"}></Input>
                            <Button classname="buttonAzuriraj" content={"Ажурирај"} />
                        </div>
                    )}
                    {activePopup === 3 && (
                        <div>
                            <ProfileStatusWidget style="pregledNaPodatoci3" status={"Услови за користење на апликацијата за ментално здравје"} description={"Прифаќање на условите: Со користење на оваа апликација, се согласувате да ги почитувате и да бидете обврзани со овие услови за користење.\n" +
                                "Политика за приватност: Вашата приватност е важна за нас. Ве молиме прегледајте ја нашата Политика за приватност, која исто така го регулира вашето користење на апликацијата.\n" +
                                "Користење на апликацијата: Оваа апликација е наменета само за информативни цели и не претставува медицински совет или третман.\n" +
                                "Одговорности на корисникот: Вие сте одговорни за одржување на доверливоста на вашата сметка и лозинка и за ограничување на пристапот до вашиот уред.\n" +
                                "Ограничување на одговорност: Провајдерот на апликацијата не е одговорен за каква било директна, индиректна, случајна или последична штета што произлегува од користењето или неможноста за користење на апликацијата.\n" +
                                "Промени на условите: Го задржуваме  правото да го прекинеме вашиот пристап до апликацијата по наша дискреција, без известување и без одговорност, по која било причина."} />
                        </div>
                    )}
                </>
            )}
        </>
    )
}
export default ProfileStatusLayout;