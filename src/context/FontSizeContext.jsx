import React, { createContext, useState, useContext } from 'react';


const FontSizeContext = createContext();


export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(""); 

  const defaultSizes = {
    navbar: "19px",
    title: "23px",
    question: "18px",
    moodcard: "19px",
  }

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize, defaultSizes }}>
      {children}
    </FontSizeContext.Provider>
  );
};


export const useFontSize = () => {
  return useContext(FontSizeContext);
};
