import { useContext, useState } from 'react';
import UserContext from '../Components/Context/UserContext';
import './LoginForm.css';
import axios from 'axios';

const LoginForm = ({showLogInForm ,setShowLogInForm}) => {


    const {setUser} = useContext(UserContext)
    const [nome, setNome] = useState("")
    let ErrorLogIn = <><button className="login-form-button">Login</button></>
    const [HasError, setHasError] = useState(false)

    function handleSubmit(event){
        event.preventDefault()
        async function createAccount(){
            axios.post(`https://pokedex20201.herokuapp.com/users`, {username : nome})
            .then((resp) => {
                setShowLogInForm(false)
                login()
            })
        }
        async function login(){
            axios.get(`https://pokedex20201.herokuapp.com/users/${nome}`)
            .then((resp)=>{
                setUser(resp.data)
                localStorage.setItem("pokedex@user", JSON.stringify(resp.data))
            })
            .catch((err)=>{
                setHasError(true)
            })
        }
        if (HasError){
            createAccount()
        }else{
            login()
        }
        
    }

    if (HasError) {
        ErrorLogIn = <>
            <span className="error-mensagem">Ops! O usuário '{nome}' não foi encontrado, deseja criar uma conta com esse mesmo nome?</span>
            <button className="login-form-button" onClick={handleSubmit}>Criar Conta</button>
            <button className="cancel-form-button" onClick={() => setHasError(false)}>Voltar</button>
        </>
    }

    return(
        <div className="login-form-container">
            <span className="login-form-title">Bem vindo!</span>
            <form className="login-form-name-input-container" onSubmit={handleSubmit}>
                <span className="login-form-name">Nome:</span>
                <input placeholder="Digite aqui seu nome" id="login-form-input" value={nome} onChange={(event) => {setNome(event.target.value)}}></input>
                {ErrorLogIn}
            </form>
            </div>
        );
}

export default LoginForm;