//UI
import NavBar from "../../components/ui/NavBar/NavBar";
//Layout
import BreathingConditionLayout from "../../components/layouts/BreathingConditionLayout/BreathingConditionLayout";
//Style
import "../BreathingCondition/BreathingCondition.css"

function BreathingCondition(){
    return(
        <>
            <NavBar/>
            <BreathingConditionLayout/>
        </>
    )
}
export default BreathingCondition;