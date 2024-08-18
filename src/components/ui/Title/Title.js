// Styles
import React from 'react';
import { useFont } from '../../../context/FontContext';
import '../Title/Title.css';

function Title(props) {
    const {styles} = useFont()
    return (
        <div className={`title ${props.className ? props.className : ''}`}>
            <img src={props.img} onClick={props.onClick}></img>
            <h3 style={{fontSize: styles.title.fontSize, fontFamily: styles.title.fontFamily, color: styles.title.color, backgroundColor: styles.title.backgroundColor}}>{props.title}</h3>
        </div>
    )
}


export default Title;