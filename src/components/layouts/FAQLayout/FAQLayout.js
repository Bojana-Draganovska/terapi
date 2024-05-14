//Style
import FAQWidget from "../../widgets/FAQWidget/FAQWidget";
import "../FAQLayout/FAQLayout.css"

function FAQLayout(props){
    return(
        <>
            <div className="mainFAQ">
                <FAQWidget quastion={props.quastion1} answer={props.answer1}/>
                <FAQWidget quastion={props.quastion2} answer={props.answer2}/>
                <FAQWidget quastion={props.quastion3} answer={props.answer3}/>
            </div>
        </>
    )
}
export default FAQLayout;