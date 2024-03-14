// UI
import Button from "../../components/ui/Button/Button";
import NavBar from "../../components/ui/NavBar/NavBar";
import Title from "../../components/ui/Title/Title";
// Styles
import "../InformativeCorner/InformativeCorner.css";

function InformativeCorner(props) {
  return (
    <>
      <NavBar />
      <Title title={"Анксиозност"} img={"assets/icons/vector.svg"}/>
      <div className="main">
        <div className="content">
          <img src="assets/images/anxiety.jpg"></img>
          <p>
            Анксиозност е чувството што ве обзема кога сте загрижени или
            уплашени за нешто. Тоа е природно чувство на страв или паника кај
            луѓето. По едно такво доживување, вообичаено се смируваме и се
            чувствуваме подобро. Загриженост или страв од мал размер може да ни
            помогне да останеме безбедни и да се заштитиме од опасност. Меѓутоа,
            анксиозноста понекогаш може да не направи да се чувствуваме дека
            работите се полоши отколку што навистина се и чувството може да е
            неиздржливо. Постојаната загриженост може да доведе до пролонгирана
            анксиозност. Ако анксиозноста го спречува вашето дете да ги прави
            работите во кои ужива или чувствува загриженост или паника во
            ситуација што не е стресна, важно е да добие поддршка за да му
            помогнете да се чувствува подобро.
          </p>
        </div>
        <p className="login">за да ги искористите сите бенефити од апликацијата ве молиме </p>
        <Button content={"Најавете се"} classname={"btnLogin"} />
      </div>
    </>
  );
}

export default InformativeCorner;
