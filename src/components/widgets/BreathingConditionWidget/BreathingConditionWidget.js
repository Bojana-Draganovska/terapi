//UI
import Title from "../../ui/Title/Title";
//Style
import "../BreathingConditionWidget/BreathingConditionWidget.css"

function BreathingConditionWidget() {
    return (
        <>
            <Title className="title" img="assets/icons/vector.svg" title="Deep Bally Breathing" />
            <div className="breathingCondition">
                <img className="breathingConditionImage" src="assets/images/deep_bally_breathing.jpg" />
                <div className="breathingConditionInfo">
                    <p>Дијафрагматско дишење уште се нарекува и длабоко стомачно дишење е добра техника за намалување на стресот. Најчесто оваа тактика се користи за релаксација, за да можат луѓето да почувстуваат мир и спокој каде што ја одбиваат целата лоша енергија од самите себеси. Оваа техника за дишење ја вклучува дијафрагмата, големиот мускул каде што е лоциран помеѓу градите и абдоменот.</p>
                 </div>
            </div>
        </>
    )
}
export default BreathingConditionWidget;