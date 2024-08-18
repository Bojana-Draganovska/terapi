import "../PersonalizationWidget/PersonalizationWidget.css";
import React, { useEffect, useState } from "react";
import { useFont } from "../../../context/FontContext";

const PersonalizationWidget = () => {
    const { styles, updateStyle } = useFont();
    const [selectedComponent, setSelectedComponent] = useState("navbar");
    const [color, setColor] = useState(styles[selectedComponent].color);

    const handleComponentChange = (e) => {
        setSelectedComponent(e.target.value);
    }

    const handleFontSizeChange = (e) => {
        if (selectedComponent !== "EntireApp") {
            if(selectedComponent === "button"){
                updateStyle("button", "fontSize", e.target.value);
                updateStyle("widget", "fontSize", e.target.value);
            }
        }
    }

    const handleFontFamilyChange = (e) => {
        if (selectedComponent !== "EntireApp") {
            if(selectedComponent === "button"){
                updateStyle("button", "fontFamily", e.target.value);
                updateStyle("widget", "fontFamily", e.target.value);
            }
        }
    }

    const handleColorChange = (e) => {
        if (selectedComponent !== "EntireApp") {
            if (selectedComponent === "button") {
                updateStyle("button", "color", e.target.value);
                updateStyle("widget", "color", e.target.value);
                setColor(e.target.value);
            }
        }
    }

    const handleBackgroundColorChange = (e) => {
        if (selectedComponent !== "EntireApp") {
            if (selectedComponent === "button") {
                updateStyle("button", "backgroundColor", e.target.value);
                updateStyle("widget", "backgroundColor", e.target.value);
            }
        } if (selectedComponent === "EntireApp") {
            document.body.style.backgroundColor = e.target.value;
        }
    }

    return (
        <div>
            <label>
                Select Component:
                <select onChange={handleComponentChange} value={selectedComponent}>
                    <option value="navbar">NavBar</option>
                    <option value="button">Button</option>
                    <option value="text">Paragraph/Text</option>
                    <option value="EntireApp">Entire App</option>
                </select>
            </label>
            <label htmlFor="font-color">
                Font Color:
                <input type="color" id="font-color" value={color} onChange={handleColorChange} />
            </label>
            <label>
                Font Size:
                <select onChange={handleFontSizeChange} value={styles[selectedComponent].fontSize}>
                    <option value="14px">14px</option>
                    <option value="16px">16px</option>
                    <option value="18px">18px</option>
                    <option value="23px">23px</option>
                </select>
            </label>
            <label>
                Font Family:
                <select onChange={handleFontFamilyChange} value={styles[selectedComponent].fontFamily}>
                    <option value="IBM Plex Mono">Default</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Space Mono">Space Mono</option>
                    <option value="Times New Roman">Times New Roman</option>
                </select>
            </label>
            <label htmlFor="background-color">
                Background Color:
                <input type="color" id="background-color" value={styles[selectedComponent].backgroundColor} onChange={handleBackgroundColorChange} />
            </label>
        </div>
    )
}
export default PersonalizationWidget;