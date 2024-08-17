// UI
import Question from "../../components/ui/Question/Question";
import "../EmergencyHelp/EmergencyHelp.css";

function EmergencyHelp() {
  return (
    <>
      <Question
        submain={
          "Се борите ли? Повикајте не, и ние сме тука да ви бидеме рамо за поддршка во тешките моменти.– Нашите експерти се подготвени 24/7 да ги претворат вашите предизвици во решенија!"
        }
        main={"+ 389 70 854 326"}
        classname={"helpTest"}
      />
    </>
  );
}

export default EmergencyHelp;
