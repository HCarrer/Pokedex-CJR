import './Navbar.css'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import LoginButton from '../LoginButton/LoginButton';

const Navbar = () => {
    return(
        <div className="navbar-container">
            <div className="vertical-align-navbar">
                <FaSearch className="search-icon-navbar"/>
            </div>
            <h1 className="vertical-align-navbar">
                <a href="/" className="title-navbar">POKEDEX</a>
            </h1>
            <LoginButton/>
        </div>
    );
}

export default Navbar;