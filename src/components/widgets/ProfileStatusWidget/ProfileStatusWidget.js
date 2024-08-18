//Style
import { useFont } from "../../../context/FontContext";
import "../ProfileStatusWidget/ProfileStatusWidget.css";

function ProfileStatusWidget(props) {
    const {styles} = useFont();

    return (
        <>
            <div className={`profileStatus ${props.className ? props.className : ''}`} poeni={props.poeni} style={{fontSize: styles.widget.fontSize, fontFamily: styles.widget.fontFamily, color: styles.widget.color, backgroundColor: styles.widget.backgroundColor}}>
            <span className={"points"}>{props.poeni}</span>
            <p className={`${props.style ? props.style : ''}`}>{props.status}</p>
            <span className={`description ${props.naslovPredizvik ? props.naslovPredizvik : ''}`}>{props.description}</span>
            <span className={`description ${props.naslovPredizvik1 ? props.naslovPredizvik1 : ''}`}>{props.description1}</span>
            <span className={`description ${props.naslovPredizvik2 ? props.naslovPredizvik2 : ''}`}>{props.description2}</span>
            <span className={`description ${props.naslovPredizvik3 ? props.naslovPredizvik3 : ''}`}>{props.description3}</span>
            </div>
        </>
    )
}
export default ProfileStatusWidget;