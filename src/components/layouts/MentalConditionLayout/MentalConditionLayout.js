//UI
import Button from "../../ui/Button/Button";
//Widgets
import MentalConditionWidget from "../../widgets/MentalConditionWidget/MentalConditionWidget";
//Style
import "../MentalConditionLayout/MentalConditionLayout.css"



function MentalConditionLayout(props) {
    return (
        <>
            <MentalConditionWidget tittle={props.title} img={props.img} description={props.description}/>
            <div className="footer">
                <span className="text">за да ги искористите сите бенефити од апликацијата ве молиме</span>
                <Button classname="btnLogin" content={"најавете се"} />
            </div>

        </>
    )
}
export default MentalConditionLayout;