import React, { useContext } from 'react';
import { ThemeContext } from '../pages/Demo_useContext'; // Import the context we export from App.js

function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            style={{
                background: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                padding: '10px 20px',
                cursor: 'pointer'
            }}
        >
            Current Theme: {theme} (Click to toggle)
        </button>
    );
}

export default ThemeButton;
