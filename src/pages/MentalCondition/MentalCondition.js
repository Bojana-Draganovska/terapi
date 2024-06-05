//UI
import NavBar from "../../components/ui/NavBar/NavBar";
//Layout
import MentalConditionLayout from "../../components/layouts/MentalConditionLayout/MentalConditionLayout";
//Style
import "../MentalCondition/MentalCondition.css"
// 
import { useLocation } from "react-router-dom";

function MentalCondition(props){
    const location = useLocation();
    const { title, img, description } = location.state || {};
  
console.log(props.title)

    return(
        <>
            <NavBar/>
            <MentalConditionLayout title={props.title} img={props.img} description={props.description}/>    
        </>
    )
}
export default MentalCondition;
