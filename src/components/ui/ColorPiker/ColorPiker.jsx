import React, { useState, useContext } from 'react';
import { ColorContext } from '../../../context/ColorContext'; 
import "../ColorPiker/ColorPiker.css";

function ColorPiker() {
    const { color, setColor } = useContext(ColorContext); 
    
    const handleChange = (event) => {
        setColor(event.target.value); 
        document.documentElement.style.setProperty('--app-background-color', event.target.value); 
    };

    return (
        <div className="color-picker">
            <label htmlFor="colorInput"></label>
            <input
                type="color"
                id="colorInput"
                value={color}
                onChange={handleChange}
            />
        </div>
    );
}

export default ColorPiker;
