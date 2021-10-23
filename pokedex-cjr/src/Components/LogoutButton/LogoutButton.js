import './LogoutButton.css'
import { useContext} from 'react';
import UserContext from '../Context/UserContext';
import { Link } from 'react-router-dom'

const LogoutButton = () => {

    const {setUser} = useContext(UserContext)

    const logout = () => {
        setUser(null)
        localStorage.setItem("pokedex@user", null)
    }

    return (
        <div>
            <Link to="/">
                <button className="vertical-align-navbar logout-button-navbar" onClick={() => logout()}>Logout</button>
            </Link>
        </div>
    );
}

export default LogoutButton;