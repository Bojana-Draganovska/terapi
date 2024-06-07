//Style
import { useEffect, useState } from "react";
import Button from "../../ui/Button/Button";
import Title from "../../ui/Title/Title";
import ProfileStatusWidget from "../../widgets/ProfileStatusWidget/ProfileStatusWidget";
import "../ProfileStatusLayout/ProfileStatusLayout.css";
import statusData from "../../../status.json";

function ProfileStatusLayout(props) {
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedDay, setSelectedDay] = useState(null);
    const [completedDays, setCompletedDays] = useState({});
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
    
    const handleCompleteAndBackClick = () => {
        if (selectedDay !== null) {
            // Complete the selected day
            setCompletedDays((prev) => ({
                ...prev,
                [selectedTitle]: {
                    ...prev[selectedTitle],
                    [selectedDay]: true,
                },
            }));
            setSelectedDay(null); // Go back to the list of days (the widgets)
        }
    };

    const renderDayData = () => {
        const dayData = getDayData(selectedTitle, selectedDay);
        return dayData ? (
            <div key={dayData.id} className="dayDetail">
                <img className="imgFrame2_1" src="assets/images/frame.jpg" alt="imgFrame2" />
                <ProfileStatusWidget key={dayData.id} className="selectedDayStatus" style="styles" style1="style1" status={dayData.naslov} description={dayData.descrition}/>
                <Button classname="btnFinish" content={"завршено"} onClick={handleCompleteAndBackClick}/>
            </div>
        ) : (
            <div>Day data not found</div>
        );
    };

    return (
        <>
            {selectedTitle ? (
                <>
                    <Title className="title" img="/assets/icons/vector.svg" title={selectedDay ? `Ден ${selectedDay}` : selectedTitle}/>
                    <div className="categoryWidget">
                        {selectedDay ? (
                            <>
                              {renderDayData()}
                            </>
                        ) : (
                            <>
                                {filterDataByCategory(selectedTitle).map((item, index) => (
                                    <div key={index}   className={`categorywidgets ${completedDays[selectedTitle] && completedDays[selectedTitle][index + 1] ? 'completed' : ''}`} onClick={() => handleDayClick(index + 1)}>
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
                </>
            )}
        </>
    )
}
export default ProfileStatusLayout;