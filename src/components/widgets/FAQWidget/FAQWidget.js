//Style
import "../FAQWidget/FAQWidget.css"

function FAQWidget(props) {
    return (
        <>
            <div>
                <img className="imgFrame" src="assets/images/frame.jpg" />
            </div>
            <div className="faqWidget">
                <h3 className="question">{props.question}</h3>
                <ul className="answer">
                    <li>{props.answer}</li>
                </ul>
            </div>
        </>
    )
}
export default FAQWidget;