import React, { createContext, useState, useContext } from 'react';


const FontContext = createContext();


export const FontProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(""); 
  const [fontFamily, setFontFamily] = useState("Poppins");

  const defaultSizes = {
    navbar: "19px",
    title: "23px",
    question: "18px",
    moodcard: "19px",
  }

  return (
    <FontContext.Provider value={{ fontSize, setFontSize, defaultSizes, fontFamily, setFontFamily }}>
      {children}
    </FontContext.Provider>
  );
};


export const useFont = () => {
  return useContext(FontContext);
};
