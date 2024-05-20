//UI
import Button from "../../ui/Button/Button";
//Widgets
import MentalConditionWidget from "../../widgets/MentalConditionWidget/MentalConditionWidget";
//Style
import "../MentalConditionLayout/MentalConditionLayout.css"

import { useEffect, useState } from "react";
import data from "../../../data.json"

function MentalConditionLayout() {
    // const { widgetId } = useParams();
    // const [widgetData, setWidgetData] = useState(data);

    // useEffect(() =>{
    //     setWidgetData(data);
    //   })
    //   console.log(widgetData);
    return (
        <>
        {/* {widgetData.map(widget => (
            <MentalConditionWidget title={widget.title}/>
        ))} */}
            
            <div className="footer">
                <span className="text">за да ги искористите сите бенефити од апликацијата ве молиме</span>
                <Button classname="btnLogin" content={"најавете се"} />
            </div>

        </>
    )
}
export default MentalConditionLayout;