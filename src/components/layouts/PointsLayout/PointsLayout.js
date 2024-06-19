//Style
import "../PointsLayout/PointsLayout.css";
import statusData from "../../../status.json";
import ProfileStatusWidget from "../../widgets/ProfileStatusWidget/ProfileStatusWidget";
import { useState } from "react";

function PointsLayout(){
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedTitle, setSelectedTitle] = useState("");
    const [completedDays, setCompletedDays] = useState({});
    const categories = ["Анксиозност", "Менаџирање со гнев", "Депресија"];

    const filterDataByCategory = (category) => {
        const categoryIndex = categories.indexOf(category);
        if (categoryIndex !== -1) {
            const start = categoryIndex * 7;
            const end = start + 7;
            return statusData.slice(start, end);
        }
        return [];
    };

    const handleDayClick = (id) => {
        setSelectedDay(id);
    };

    return(
        <>
            {filterDataByCategory(selectedTitle).map((item, index) => {
                                    const day = index + 1;
                                    const isCompleted = completedDays[selectedTitle]?.[day];
                                    return (
                                        <div key={index} className={`categorywidgets ${isCompleted ? "completed" : ""}`} onClick={() => handleDayClick(item.id)} style={{ pointerEvents: isCompleted ? "none" : "auto" }}>
                                            <img className="imgFrames" src={`/assets/images/frame.jpg`} alt={`Frame ${index}`}/>
                                            <ProfileStatusWidget key={item.id} className="profileWidgetsStatus" style="styles" status={item.predizvik}/>
                                        </div>
                                    );
                                })}
        </>
    )
}
export default PointsLayout;