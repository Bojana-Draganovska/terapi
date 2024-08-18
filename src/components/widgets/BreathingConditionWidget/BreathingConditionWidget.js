//UI
import { useFont } from "../../../context/FontContext";
import Title from "../../ui/Title/Title";
//Style
import "../BreathingConditionWidget/BreathingConditionWidget.css"

function BreathingConditionWidget(props) {
    const {styles} = useFont();
    const descriptionParagraphs = props.description.split('\n').map((text, index) => (
        <p key={index}>{text}</p>
      ));
    return (
        <>
            <Title className="title" img="/assets/icons/vector.svg" title={props.title} />
            <div className="breathingCondition">
                <img className="breathingConditionImage" src={props.image} />
                <div className="breathingConditionInfo" style={{fontSize: styles.lists.fontSize, fontFamily: styles.lists.fontFamily, color: styles.lists.color, backgroundColor: styles.lists.backgroundColor}}>{descriptionParagraphs}</div>
            </div>
        </>
    )
}
export default BreathingConditionWidget;