// UI
import { Link } from "react-router-dom";
import NavBar from "../../components/ui/NavBar/NavBar";
import Question from "../../components/ui/Question/Question";

function EmergencyHelp() {
  return (
    <>
      <NavBar />
      <Question
        submain={
          "Се борите ли? Повикајте не, и ние сме тука да ви бидеме рамо за поддршка во тешките моменти.– Нашите експерти се подготвени 24/7 да ги претворат вашите предизвици во решенија!"
        }
        main={"+ 389 70 854 326"}
        style={{ color: "#0989FF" }}
      />
    </>
  );
}

export default EmergencyHelp;
