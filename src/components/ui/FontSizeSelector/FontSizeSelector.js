import "../FontSizeSelector/FontSizeSelector.css";
import React from 'react';
import { useFont } from '../../../context/FontContext'; 

const FontSizeSelector = () => {
  const { fontSize, setFontSize } = useFont();

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  return (
    <div>
      <label htmlFor="font-size-picker">Select Font Size:</label>
      <select id="font-size-picker" onChange={handleFontSizeChange} value={fontSize}>
        <option value="14px">14px</option>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        <option value="23px">23px</option>
      </select>
    </div>
  );
};

export default FontSizeSelector;
