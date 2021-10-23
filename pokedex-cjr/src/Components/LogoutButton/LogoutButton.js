import './LogoutButton.css'
import { useContext} from 'react';
import UserContext from '../Context/UserContext';
import { Link } from 'react-router-dom'

const LogoutButton = () => {

    const {setUser} = useContext(UserContext)

    return (
        <div>
            <Link to="/">
                <button className="vertical-align-navbar logout-button-navbar" onClick={() => setUser(null)}>Logout</button>
            </Link>
        </div>
    );
}

export default LogoutButton;