//UI
import Button from "../../ui/Button/Button";
//Widget
import BreathingConditionWidget from "../../widgets/BreathingConditionWidget/BreathingConditionWidget";
//Style
import "../BreathingConditionLayout/BreathingConditionLayout.css"

function BreathingConditionLayout(){
    return(
        <>
            <BreathingConditionWidget/>
            <div className="footer">
                <span className="text">за да ги искористите сите бенефити од апликацијата ве молиме</span>
                <Button classname="btnLogin" content={"најавете се"} />
            </div>
        </>
    )
}
export default BreathingConditionLayout;