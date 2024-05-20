//UI
import NavBar from "../../components/ui/NavBar/NavBar";
//Layout
import MentalConditionLayout from "../../components/layouts/MentalConditionLayout/MentalConditionLayout";
//Style
import "../MentalCondition/MentalCondition.css"

function MentalCondition(){
    return(
        <>
            <NavBar/>
            <MentalConditionLayout/>
        </>
    )
}
export default MentalCondition;
