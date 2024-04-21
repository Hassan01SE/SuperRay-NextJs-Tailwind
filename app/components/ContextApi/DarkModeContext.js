'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Retrieve the dark mode state from local storage if available, otherwise default to false
        return localStorage.getItem('isDarkMode') === 'true';
    });

    const handleSwitchToggle = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            // Save the updated dark mode state to local storage
            localStorage.setItem('isDarkMode', newMode);
            return newMode;
        });
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, handleSwitchToggle }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    return useContext(DarkModeContext);
};
