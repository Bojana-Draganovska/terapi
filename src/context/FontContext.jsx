import React, { createContext, useState, useContext } from 'react';


const FontContext = createContext();


export const FontProvider = ({ children }) => {
  const [styles, setStyles] = useState({
    navbar: {fontSize: "19px", fontFamily: "IBM Plex Mono", color: "", backgroundColor: ""},
    title: {fontSize: "23px", fontFamily: "IBM Plex Mono", color: "", backgroundColor: ""},
    widget: {fontSize: "18px", fontFamily: "IBM Plex Mono", color: "", backgroundColor: ""},
    question: {fontSize: "25px", fontFamily: "IBM Plex Mono", color: "", backgroundColor: ""},
    moodcard: {fontSize: "19px", fontFamily: "IBM Plex Mono", color: "", backgroundColor: ""},
    button: {fontSize: "19px", fontFamily: "IBM Plex Mono", color: "", backgroundColor: ""},
    text: {fontSize: "20px", fontFamily: "IBM Plex Mono", color: "", backgroundColor: ""},
    lists: {fontSize: "15px", fontFamily: "IBM Plex Mono", color: "", backgroundColor: ""},
    EntireApp: {fontSize: "", fontFamily: "IBM Plex Mono", backgroundColor: ""},
  });

  const updateStyle = (component, property, value) => {
    setStyles(prevStyles => ({
      ...prevStyles,
      [component]: {
        ...prevStyles[component],
        [property]: value,
      },
    }));

    if(component === "EntireApp"){
      document.body.style.backgroundColor = value;
    }
  };

  return (
    <FontContext.Provider value={{styles, updateStyle}}>
      {children}
    </FontContext.Provider>
  );
};


export const useFont = () => {
  return useContext(FontContext);
};
