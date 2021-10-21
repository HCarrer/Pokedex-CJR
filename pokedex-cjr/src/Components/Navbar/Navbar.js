import './Navbar.css'
import { FaSearch } from 'react-icons/fa';
import { useContext} from 'react';
import UserContext from '../Context/UserContext';
import { Link } from 'react-router-dom'
import LoginButton from '../LoginButton/LoginButton';
import Search from '../Searchbar/Searchbar';

const Navbar = () => {

    const {user} = useContext(UserContext)
    let LoggedIn = <></>
    if (user == null){
        LoggedIn=   <div className="login-button justify-right">
                        <LoginButton/>
                    </div>
    }else{
        LoggedIn =  <div className="user justify-right">
                        <Link to={`/${user.user.username}`}>
                            {user.user.username[0]}
                        </Link>
                    </div>
    }

    return(
        <div>
            <div className="navbar-container">
                <div className="vertical-align-navbar">
                    <Search/>
                </div>
                <h1 className="vertical-align-navbar justify-center">
                    <Link to="/" className="title-navbar">POKEDEX</Link>
                </h1>
                {LoggedIn}
            </div>
        </div>
    );
}

export default Navbar;