import './Navbar.css'
import { FaSearch } from 'react-icons/fa';
import { useContext} from 'react';
import UserContext from '../Context/Context';

import LoginButton from '../LoginButton/LoginButton';
import Search from '../Searchbar/Searchbar';

const Navbar = () => {

    const {user, setUser} = useContext(UserContext)
    let LoggedIn = <></>
    if (user == null){
        LoggedIn= <div className="login-button"><LoginButton/></div>
    }else{
        LoggedIn = <span>{user.user.username}</span>
    }

    console.log(user)
    return(
        <div>
            <div className="navbar-container">
                <div className="vertical-align-navbar">
                    <Search/>
                </div>
                <h1 className="vertical-align-navbar">
                    <a href="/" className="title-navbar">POKEDEX</a>
                </h1>
                {LoggedIn}
            </div>
        </div>
    );
}

export default Navbar;