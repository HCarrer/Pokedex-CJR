import LoginButton from '../Components/LoginButton/LoginButton';
import Popup from 'reactjs-popup';
import './LoginForm.css'

const LoginForm = () => {
    return(
        <div className="login-form-container">
            <span className="login-form-title">Bem vindo!</span>
            <div className="login-form-name-input-container">
                <span className="login-form-name">Nome:</span>
                <input placeholder="Digite aqui seu nome" id="login-form-input"></input>
            </div>
            <button className="login-form-button">
                Login
            </button>
        </div>
    );
}

export default LoginForm;