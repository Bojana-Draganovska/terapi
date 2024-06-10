//UI
import { Link, useParams } from "react-router-dom";
import Button from "../../ui/Button/Button";
//Widgets
import MentalConditionWidget from "../../widgets/MentalConditionWidget/MentalConditionWidget";
//Style
import "../MentalConditionLayout/MentalConditionLayout.css"

import { useEffect, useState } from "react";
import data from "../../../dataSrc.json";

function MentalConditionLayout() {
    const {title} = useParams();
    const [currentCondition, setCurrentCondition] = useState(null);

    useEffect(() => {
        const condition = data.find(item => item.title === title);
        if(condition){
            setCurrentCondition(condition);
        }
    }, [title]);
    return (
        <>
        {currentCondition && (
              <MentalConditionWidget title={currentCondition.title} image={currentCondition.image} description={currentCondition.description}/>
        )}
            <div className="footer">
                <span className="text">за да ги искористите сите бенефити од апликацијата ве молиме</span>
                <Link to={"/login"}><Button classname="btnLogin" content={"најавете се"}/></Link>
            </div>

        </>
    )
}
export default MentalConditionLayout;