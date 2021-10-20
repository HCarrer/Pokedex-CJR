import { useContext, useState } from 'react';
import UserContext from '../Components/Context/Context';
import './LoginForm.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'

const LoginForm = ({showLogInForm ,setShowLogInForm}) => {

    const {user, setUser} = useContext(UserContext)
    const [nome, setNome] = useState("")
    let ErrorLogIn = <><button className="login-form-button">Login</button></>
    const [deuerro, setdeuerro] = useState(false)
    let logado = false

    function handleCancel(){
        setShowLogInForm(false)
    }

    function handleSubmit(event){
        event.preventDefault()
        async function CriarConta(){
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
                logado = true
                //setShowLogInForm(false)
            })
            .catch((err)=>{
                setdeuerro(true)
            })
        }
        if (deuerro){
            CriarConta()
        }else{
            login()
        }
        
    }

    if (deuerro) {
        ErrorLogIn = <>

            <span className="error-mensagem">Ops! O usuário '{nome}' não foi encontrado, deseja criar uma conta com esse mesmo nome?</span>
            <button className="login-form-button" onClick={handleSubmit}>Criar Conta</button>
            <button className="cancel-form-button" onClick={() => setdeuerro(false)}>Voltar</button>
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