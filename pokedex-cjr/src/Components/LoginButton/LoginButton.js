import './LoginButton.css'
import LoginForm from '../../LoginForm/LoginForm';
import { useState } from 'react';

const LoginButton = () => {

    const [showLoginForm, setShowLoginForm] = useState(false);
    let loginForm;

    if(showLoginForm) {
        loginForm = <LoginForm/>
    }

    return (
        <div>
            <button className="vertical-align-navbar login-button-navbar" onClick={() => setShowLoginForm(!showLoginForm)}>Login</button>
            {loginForm}
        </div>
    );
}

export default LoginButton;