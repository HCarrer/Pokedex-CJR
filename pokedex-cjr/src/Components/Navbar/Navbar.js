import './Navbar.css'
import { FaSearch } from 'react-icons/fa';

import LoginButton from '../LoginButton/LoginButton';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
    
    const [showSearch, setShowSearch] = useState(false)

    let search = <></>
    
    if (showSearch) {
        search =  <OutsideClickHandler onOutsideClick={setShowSearch(false)}><div className="search">
            <input type="text" className="input-search" placeholder="Procure um pokemon..."></input>
            <button class="btn-search"><FaSearch /></button>
        </div></OutsideClickHandler>
    }
    else {
        search = <div>
            <button class="btn-search" onClick={() => setShowSearch(true)}><FaSearch/></button>
        </div>
    }

    return(
        <div>
            <div className="navbar-container" >
                <div className="vertical-align-navbar">
                    {search}
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

// <FaSearch className="search-icon-navbar"/>