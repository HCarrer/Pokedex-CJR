import './Navbar.css'
import { useContext} from 'react';
import UserContext from '../Context/UserContext';
import { Link } from 'react-router-dom'
import LoginButton from '../LoginButton/LoginButton';
import Search from '../Searchbar/Searchbar';
import Logo from './pokedex-logo.png'
import LogoutButton from '../LogoutButton/LogoutButton';

const Navbar = () => {

    const {user} = useContext(UserContext)
    let LoggedIn = <></>
    if (user == null){
        LoggedIn=   <div className="navbar-item login-button">
                        <LoginButton/>
                    </div>
    }else{
        LoggedIn =  
                    <div className="navbar-item logout-button">
                        <LogoutButton/>
                        <div className="navbar-item user">
                            <Link to={`/${user.user.username}`}>
                                {user.user.username[0]}
                            </Link>
                        </div>
                    </div>
    }

    return(
        <div className="navbar-container">
            <div className="navbar-item vertical-align-navbar">
                <Search/>
            </div>
            <h1 className="navbar-item vertical-align-navbar">
                <Link to="/" className="title-navbar">
                    <img className="logo" alt="Pokedex Logo" src={Logo}></img>
                </Link>
            </h1>
            {LoggedIn}
        </div>
    );
}

export default Navbar;