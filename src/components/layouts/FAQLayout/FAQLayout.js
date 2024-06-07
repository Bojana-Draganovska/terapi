// Widget
import FAQWidget from "../../widgets/FAQWidget/FAQWidget";
//Style
import "../FAQLayout/FAQLayout.css";

function FAQLayout(props) {
  return (
    <>
      <div className="mainFAQ">
        <FAQWidget question ={props.question1} answer={props.answer1}/>
        <FAQWidget question ={props.question2} answer={props.answer2}/>
        <FAQWidget question ={props.question3} answer={props.answer3}/>
      </div>
    </>
  );
}
export default FAQLayout;
