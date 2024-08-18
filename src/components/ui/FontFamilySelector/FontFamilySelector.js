import "../FontFamilySelector/FontFamilySelector.css";
import React from "react";
import { useFont } from "../../../context/FontContext";

const FontFamilySelector = () => {
    const { fontFamily, setFontFamily } = useFont();
  
    const handleFontFamilyChange = (event) => {
      setFontFamily(event.target.value);
    };
  
    return (
      <div>
        <label htmlFor="font-family-picker">Select Font Family:</label>
        <select id="font-family-picker" onChange={handleFontFamilyChange} value={fontFamily}>
          <option value="IBM Plex Mono">Default</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Roboto">Roboto</option>
          <option value="Merriweather">Merriweather</option>
        </select>
      </div>
    );
  };
  
  export default FontFamilySelector;