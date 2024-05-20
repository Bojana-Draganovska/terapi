//UI
import NavBar from "../../components/ui/NavBar/NavBar";
import Question from "../../components/ui/Question/Question";
// Layout
import FAQLayout from "../../components/layouts/FAQLayout/FAQLayout";
//Style
import "../FAQ/FAQ.css"

function FAQ(){
   return(
    <>
       <NavBar/>
       <Question/>
       <FAQLayout />
    </>
   )
}
export default FAQ;