//UI
import Button from "../../ui/Button/Button";
//Widget
import BreathingConditionWidget from "../../widgets/BreathingConditionWidget/BreathingConditionWidget";
//Style
import "../BreathingConditionLayout/BreathingConditionLayout.css"
//Data
import data from "../../../dataSrc.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BreathingConditionLayout(){
    const {title} = useParams();
    const [currentCondition, setCurrentCondition] = useState(null);

    useEffect(() => {
        const condition = data.find(item => item.title === title);
        if(condition){
            setCurrentCondition(condition);
        }
    }, [title]);
    return(
        <>
        {currentCondition && (
            <BreathingConditionWidget title={currentCondition.title} image={currentCondition.image} description={currentCondition.description}/>
        )}
            <div className="footer">
                <span className="text">за да ги искористите сите бенефити од апликацијата ве молиме</span>
                <Button classname="btnLogin" content={"најавете се"} />
            </div>
        </>
    )
}
export default BreathingConditionLayout;