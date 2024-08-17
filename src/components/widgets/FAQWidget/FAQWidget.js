//Style
import { useFont } from "../../../context/FontContext";
import "../FAQWidget/FAQWidget.css"

function FAQWidget(props) {
    const {fontSize, fontFamily} = useFont();
    return (
        <>
            <div>
                <img className="imgFrame" src="assets/images/frame.jpg" />
            </div>
            <div className="faqWidget">
                <h3 className="question" style={{fontSize, fontFamily}}>{props.question}</h3>
                <ul className="answer" style={{fontSize, fontFamily}}>
                    <li>{props.answer}</li>
                </ul>
            </div>
        </>
    )
}
export default FAQWidget;