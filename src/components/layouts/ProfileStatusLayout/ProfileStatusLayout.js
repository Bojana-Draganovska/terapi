//Style
import { useEffect, useState } from "react";
import Title from "../../ui/Title/Title";
import ProfileStatusWidget from "../../widgets/ProfileStatusWidget/ProfileStatusWidget";
import "../ProfileStatusLayout/ProfileStatusLayout.css";
import statusData from "../../../status.json";

function ProfileStatusLayout(props) {
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedDay, setSelectedDay] = useState(null);
    const categories = ["Анксиозност", "Менаџирање со гнев", "Депресија"];

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

    return (
        <>
            {selectedTitle ? (
                <>
                    <Title className="title" img="/assets/icons/vector.svg" title={selectedTitle} />
                    <div className="categoryWidget">
                        {selectedDay ? (
                            <>
                                {(() => {
                                    const dayData = getDayData(selectedTitle, selectedDay);
                                })}
                            </>
                        ) : (
                            <>
                                {/* <Title className="title" img="/assets/icons/vector.svg" title={`Ден ${selectedDay}`} /> */}
                                {filterDataByCategory(selectedTitle).map((item, index) => (
                                <div key={index} className="categorywidgets" onClick={() => handleDayClick(index + 1)}>
                                    <img className="imgFrames" src={`/assets/images/frame.jpg`} />
                                    <ProfileStatusWidget key={item.id} className="profileWidgetsStatus" style="styles" status={item.den} />
                                </div>
                                ))}
                            </>

                        )}
                        <img className="imgFramee" src={`/assets/images/frame.jpg`} />
                    </div>
                </>
            ) : (
                <div className="profileStatusLayout">
                    <ProfileStatusWidget className="profileWidgetStatus" />
                    <div onClick={() => handleWidgetClick(0)}>
                        <img className="imgFrame1" src="assets/images/frame.jpg" alt="imgFrame1" />
                        <ProfileStatusWidget status={props.status1} />
                    </div>
                    <div onClick={() => handleWidgetClick(1)}>
                        <img className="imgFrame2" src="assets/images/frame.jpg" alt="imgFrame2" />
                        <ProfileStatusWidget status={props.status2} />
                    </div>
                    <div onClick={() => handleWidgetClick(2)}>
                        <img className="imgFrame3" src="assets/images/frame.jpg" alt="imgFrame3" />
                        <ProfileStatusWidget status={props.status3} />
                    </div>
                </div>
            )}
        </>
    )
}
export default ProfileStatusLayout;