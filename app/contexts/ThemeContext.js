'use client';
import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        const darktheme = localStorage.getItem('darktheme');
        if (darktheme === 'true') {
            setDarkTheme(true);
        } else {
            setDarkTheme(false);
        }
    }, []);

    useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setDarkTheme((prevTheme) => {
            const newTheme = !prevTheme;
            localStorage.setItem('darktheme', newTheme);
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
