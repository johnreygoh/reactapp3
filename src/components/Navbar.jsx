import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { cartContext } from '../App';

function Navbar() {
    // A helper function to change styles if the link is active
    const checkActive = ({ isActive }) => {
        return {
            padding: '10px 20px',
            textDecoration: 'none',
            color: isActive ? 'white' : '#ccc',
            backgroundColor: isActive ? '#00529B' : 'transparent', // Blue if active
            borderRadius: '5px',
            fontWeight: 'bold'
        };
    };

    const { cartCounter } = useContext(cartContext);

    return (
        <nav style={{
            display: 'flex', gap: '15px', backgroundColor: '#333', padding: '10px', marginBottom: '10px'
        }}>
            <NavLink to="/" style={checkActive}>Home</NavLink>
            <NavLink to="/About" style={checkActive}>About</NavLink>
            <NavLink to="/Contact" style={checkActive}>Contact</NavLink>
            <NavLink to="/Demo_useContext" style={checkActive}>useContext</NavLink>
            <NavLink to="/Demo_useReducer" style={checkActive}>useReducer</NavLink>
            <NavLink to="/CustomHooks" style={checkActive}>CustomHooks</NavLink>
            <NavLink to="/FetchDemo" style={checkActive}>FetchDemo</NavLink>
            <NavLink to="/AxiosDemo" style={checkActive}>AxiosDemo</NavLink>
            <NavLink to="/AsyncDemo" style={checkActive}>AsyncDemo</NavLink>
            <NavLink to="/ReduxToolkitDemo" style={checkActive}>ReduxToolkitDemo</NavLink>
            <NavLink to="/ZustandDemo" style={checkActive}>ZustandDemo</NavLink>
            <h4>🛒{cartCounter}</h4>
        </nav>
    );
}
export default Navbar;