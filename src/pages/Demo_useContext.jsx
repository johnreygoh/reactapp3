import { useState, createContext } from 'react'
import ThemeButton from '../components/ThemeButton';
import Product from '../components/Product';

// open connection to other controls
export const ThemeContext = createContext();

function Demo_useContext() {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (

        <>
            <div style={{
                padding: '20px',
                backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
                color: theme === 'light' ? '#000' : '#fff',

            }}>
                <h3>Demo useContext()</h3>
                <ThemeContext.Provider value={{ theme, toggleTheme }}>
                    <ThemeButton />
                </ThemeContext.Provider>
            </div>

            <Product />
        </>
    );
}
export default Demo_useContext;