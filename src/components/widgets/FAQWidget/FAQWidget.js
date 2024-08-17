//Style
import { useFontSize } from "../../../context/FontSizeContext";
import "../FAQWidget/FAQWidget.css"

function FAQWidget(props) {
    const {fontSize} = useFontSize();
    return (
        <>
            <div>
                <img className="imgFrame" src="assets/images/frame.jpg" />
            </div>
            <div className="faqWidget">
                <h3 className="question" style={{fontSize}}>{props.question}</h3>
                <ul className="answer" style={{fontSize}}>
                    <li>{props.answer}</li>
                </ul>
            </div>
        </>
    )
}
export default FAQWidget;