import './LoginButton.css'
import LoginForm from '../../LoginForm/LoginForm';
import { useState } from 'react';
import Modal from '../../Modal/Modal';

const LoginButton = () => {

    const [showLoginForm, setShowLoginForm] = useState(false);

    return (
        <div>
            <button className="vertical-align-navbar login-button-navbar" onClick={() => setShowLoginForm(true)}>Login</button>
            <Modal show={showLoginForm} onClose={() => setShowLoginForm(false)}>
                <LoginForm setShowLogInForm={setShowLoginForm} showLoginForm={showLoginForm}/>
            </Modal>
        </div>
    );
}

export default LoginButton;