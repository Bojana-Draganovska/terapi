import "../PersonalizationWidget/PersonalizationWidget.css";
import React, { useEffect, useState } from "react";
import { useFont } from "../../../context/FontContext";
import Button from "../../ui/Button/Button";
import ProgressWidget from "../ProgressWidget/ProgressWidget";

const PersonalizationWidget = () => {
    const { styles, updateStyle } = useFont();
    const [selectedComponent, setSelectedComponent] = useState("navbar");
    const [color, setColor] = useState(styles[selectedComponent].color);
    const [activePersonalization, setActivePersonalization] = useState(null);

    const handleComponentChange = (e) => {
        setSelectedComponent(e.target.value);
    }

    const handleFontSizeChange = (e) => {
        if (selectedComponent === "button") {
            updateStyle("button", "fontSize", e.target.value);
            updateStyle("widget", "fontSize", e.target.value);
            updateStyle("progress", "fontSize", e.target.value);
        } else if (selectedComponent === "text") {
            updateStyle("button", "fontSize", e.target.value);
            updateStyle("widget", "fontSize", e.target.value);
            updateStyle("progress", "fontSize", e.target.value);
            updateStyle("title", "fontSize", e.target.value);
            updateStyle("question", "fontSize", e.target.value);
            updateStyle("moodcard", "fontSize", e.target.value);
            updateStyle("text", "fontSize", e.target.value);
            updateStyle("lists", "fontSize", e.target.value);
        } else {
            updateStyle(selectedComponent, "fontSize", e.target.value);
        }
    }

    const handleFontFamilyChange = (e) => {
        if (selectedComponent === "button") {
            updateStyle("button", "fontFamily", e.target.value);
            updateStyle("widget", "fontFamily", e.target.value);
            updateStyle("progress", "fontFamily", e.target.value);
        } else if (selectedComponent === "text") {
            updateStyle("button", "fontFamily", e.target.value);
            updateStyle("widget", "fontFamily", e.target.value);
            updateStyle("progress", "fontFamily", e.target.value);
            updateStyle("title", "fontFamily", e.target.value);
            updateStyle("question", "fontFamily", e.target.value);
            updateStyle("moodcard", "fontFamily", e.target.value);
            updateStyle("text", "fontFamily", e.target.value);
            updateStyle("lists", "fontFamily", e.target.value);
        } else {
            updateStyle(selectedComponent, "fontFamily", e.target.value);
        }
    }

    const handleColorChange = (e) => {
        if (selectedComponent === "button") {
            updateStyle("button", "color", e.target.value);
            updateStyle("widget", "color", e.target.value);
            updateStyle("progress", "color", e.target.value);
            setColor(e.target.value);
        } else if (selectedComponent === "text") {
            updateStyle("button", "color", e.target.value);
            updateStyle("widget", "color", e.target.value);
            updateStyle("progress", "color", e.target.value);
            updateStyle("title", "color", e.target.value);
            updateStyle("question", "color", e.target.value);
            updateStyle("moodcard", "color", e.target.value);
            updateStyle("text", "color", e.target.value);
            updateStyle("lists", "color", e.target.value);
            setColor(e.target.value);
        } else {
            updateStyle(selectedComponent, "color", e.target.value);
        }
    }

    const handleBackgroundColorChange = (e) => {
        if (selectedComponent !== "EntireApp") {
            if (selectedComponent === "button") {
                updateStyle("button", "backgroundColor", e.target.value);
                updateStyle("widget", "backgroundColor", e.target.value);
                updateStyle("progress", "backgroundColor", e.target.value);
            } else {
                updateStyle(selectedComponent, "backgroundColor", e.target.value);
            }
        }
        if (selectedComponent === "EntireApp") {
            document.body.style.backgroundColor = e.target.value;
        }
    }

    const handleTogglePersonalization = (id) => {
        setActivePersonalization((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="progressContainter">
            <Button classname="buttonProgress1" content="▼" onClick={() => handleTogglePersonalization(1)} />
            <Button classname="buttonProgress2" content="▼" onClick={() => handleTogglePersonalization(2)} />
            <Button classname="buttonProgress3" content="▼" onClick={() => handleTogglePersonalization(3)} />
            <Button classname="buttonProgress4" content="▼" onClick={() => handleTogglePersonalization(4)} />
            <Button classname="buttonProgress5" content="▼" onClick={() => handleTogglePersonalization(5)} />
            {activePersonalization === 1 && (
                <div>
                    <ProgressWidget className="progress1" />
                    <div className="custom-select1">
                        <select size="4" onChange={handleComponentChange} value={selectedComponent}>
                            <option value="navbar">Навигациско мени</option>
                            <option value="button">Копчиња</option>
                            <option value="text">Текст</option>
                            <option value="EntireApp">Цела позадина</option>
                        </select>
                    </div>

                </div>
            )}
            {activePersonalization === 2 && (
                <div>
                    <ProgressWidget className="progress2" />
                    <div className="custom-select2">
                        <select size="4" onChange={handleFontFamilyChange} value={styles[selectedComponent].fontFamily} disabled={selectedComponent === "EntireApp"}>
                            <option value="IBM Plex Mono" id="font-family">Default</option>
                            <option value="Montserrat" id="font-family">Montserrat</option>
                            <option value="Space Mono" id="font-family">Space Mono</option>
                            <option value="Times New Roman" id="font-family">Times New Roman</option>
                        </select>
                    </div>
                </div>
            )}
            {activePersonalization === 3 && (
                <input className="progress3" type="color" id="font-color" value={color} onChange={handleColorChange} disabled={selectedComponent === "EntireApp"}/>
            )}
            {activePersonalization === 4 && (
                <div>
                    <ProgressWidget className="progress4" />
                    <div className="custom-select4">
                        <select size="4" onChange={handleFontSizeChange} value={styles[selectedComponent].fontSize} disabled={selectedComponent === "EntireApp"}>
                            <option value="14px">14px</option>
                            <option value="16px">16px</option>
                            <option value="18px">18px</option>
                            <option value="23px">23px</option>
                        </select>
                    </div>
                </div>
            )}
            {activePersonalization === 5 && (
                <input className="progress5" type="color" id="background-color" value={styles[selectedComponent].backgroundColor} onChange={handleBackgroundColorChange} />
            )}
        </div>
    )
}
export default PersonalizationWidget;