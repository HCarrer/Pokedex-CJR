import './Navbar.css'
import { FaSearch } from 'react-icons/fa';

import LoginButton from '../LoginButton/LoginButton';

const Navbar = () => {


    return(
        <div>
            <div className="navbar-container">
                <div className="vertical-align-navbar">
                    <FaSearch/>
                </div>
                <h1 className="vertical-align-navbar">
                    <a href="/" className="title-navbar">POKEDEX</a>
                </h1>
                <div className="login-button">
                    <LoginButton/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;