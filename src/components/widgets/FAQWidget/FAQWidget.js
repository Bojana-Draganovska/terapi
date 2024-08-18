//Style
import { useFont } from "../../../context/FontContext";
import "../FAQWidget/FAQWidget.css"

function FAQWidget(props) {
    const {styles} = useFont();
    return (
        <>
            <div>
                <img className="imgFrame" src="assets/images/frame.jpg" />
            </div>
            <div className="faqWidget">
                <h3 className="question" style={{fontSize: styles.lists.fontSize, fontFamily: styles.lists.fontFamily, color: styles.lists.color, backgroundColor: styles.lists.backgroundColor}}>{props.question}</h3>
                <ul className="answer" style={{fontSize: styles.lists.fontSize, fontFamily: styles.lists.fontFamily, color: styles.lists.color, backgroundColor: styles.lists.backgroundColor}}>
                    <li>{props.answer}</li>
                </ul>
            </div>
        </>
    )
}
export default FAQWidget;