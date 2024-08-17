// Styles
import React from 'react';
import { useFontSize } from '../../../context/FontSizeContext';
import '../Title/Title.css';

function Title(props) {
    const { fontSize, defaultSizes } = useFontSize();
    const componentSize = fontSize || defaultSizes.title;

    const style = {
        fontSize: componentSize,
    };
    return (
        <div className={`title ${props.className ? props.className : ''}`}>
            <img src={props.img} onClick={props.onClick}></img>
            <h3 style={style}>{props.title}</h3>
        </div>
    )
}


export default Title;