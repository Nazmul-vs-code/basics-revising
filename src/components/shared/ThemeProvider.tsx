'use client'
import React from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({ children }) => {
    return (
        <div>
            <ThemeContext.Provider value={'light'}>

                {children}
            </ThemeContext.Provider>
        </div>
    );
};

export default ThemeProvider;