import './Navbar.css'
import { useContext} from 'react';
import UserContext from '../Context/UserContext';
import { Link } from 'react-router-dom'
import LoginButton from '../LoginButton/LoginButton';
import Search from '../Searchbar/Searchbar';

const Navbar = () => {

    const {user} = useContext(UserContext)
    let LoggedIn = <></>
    if (user == null){
        LoggedIn=   <div className="navbar-item login-button">
                        <LoginButton/>
                    </div>
    }else{
        LoggedIn =  <div className="navbar-item user">
                        <Link to={`/${user.user.username}`}>
                            {user.user.username[0]}
                        </Link>
                    </div>
    }

    return(
        <div className="navbar-container">
            <div className="navbar-item vertical-align-navbar">
                <Search/>
            </div>
            <h1 className="navbar-item vertical-align-navbar">
                <Link to="/" className="title-navbar">POKEDEX</Link>
            </h1>
            {LoggedIn}
        </div>
    );
}

export default Navbar;