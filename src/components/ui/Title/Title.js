// Styles
import React from 'react';
import { useFont } from '../../../context/FontContext';
import '../Title/Title.css';

function Title(props) {
    const { fontSize, defaultSizes, fontFamily } = useFont();
    const componentSize = fontSize || defaultSizes.title;

    const style = {
        fontSize: componentSize,
        fontFamily: fontFamily,
    };
    return (
        <div className={`title ${props.className ? props.className : ''}`}>
            <img src={props.img} onClick={props.onClick}></img>
            <h3 style={style}>{props.title}</h3>
        </div>
    )
}


export default Title;