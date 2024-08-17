import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

export function ColorProvider({ children }) {
    const [color, setColor] = useState('#ffffff'); 

    return (
        <ColorContext.Provider value={{ color, setColor }}>
            {children}
        </ColorContext.Provider>
    );
}
