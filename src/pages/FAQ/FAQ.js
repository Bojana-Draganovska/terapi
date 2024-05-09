//UI
import NavBar from "../../components/ui/NavBar/NavBar";
import Question from "../../components/ui/Question/Question";
import FAQWidget from "../../components/widgets/FAQWidget/FAQWidget";
//Style
import "../FAQ/FAQ.css"

function FAQ(){
   return(
    <>
       <NavBar/>
       <Question/>
       <FAQWidget/>
    </>
   )
}
export default FAQ;