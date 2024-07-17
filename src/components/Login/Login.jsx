import React, { useEffect, useState } from "react";
import "./Login.css";
import "../../App.css";
import Axios from "axios";
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo.png";
import { Link , useNavigate} from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

function Login() {
  // gancho useState para armazenar entradas

  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigateTo = useNavigate()

  // vamos agora mostrar a mensagem ao usuário
  const [ loginStatus, setLoginStatus ] = useState('')
  const [ statusHolder, setStatusHolder ] = useState('message')

  // onclick vamos obter o que o usuário digitou
  const loginUser = (e) => {
    // exigiremos que o Axios crie uma API que se conecte ao servidor -
    // vamos instalar - npm install axios
    // vamos evitar o envio
    e.preventDefault(),

    Axios.post("http://localhost:3002/login", {
      //cria variável para enviar ao servidor através da rota
      LoginUserName: loginUserName,
      LoginPassword: loginPassword,
    }).then((response) => {
        console.log()
        // eu quero pegar a resposta primeiro
        // temos sucesso no banco de dados e podemos detectar um erro se a credencial estiver errada
        if(response.data.message || loginUserName =='' || loginPassword == ''){
        // credencial nao encontrado
          navigateTo('/') //então navegamos para a mesma página de login
          console.log(response.data.message)
          setLoginStatus(`Cadastro NÂO encontrado`)
          
        }
        else{
          navigateTo('/dashboard') //se as credenciais corresponderem, navegaremos
        }
    })
  }
//continuacao da mensagem
  useEffect(() => {
    if(loginStatus !== '') {
      setStatusHolder("showMessage") //show message
      setTimeout(() => {
        setStatusHolder("message") // esconder depois de 4s
      },4000)
    }
  }, [loginStatus])

  // vamos limpar o formulário ao enviar
  const onSubmit = ( )=>{
    setLoginUserName('')
    setLoginPassword('')
  }


  return ( 
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Crie e Venda Produtos Extraordinários</h2>
            <p>Adote a paz da natureza!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Não tenho uma conta</span>
            <Link to={"/register"}>
              <button className="btn"> Criar Conta</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Bem-Vindo!</h3>
          </div>

          <form className="form grid" onSubmit = {onSubmit}>
            {/* //trocar por statusHolder,loginStatus */}
            <span className={statusHolder}>{loginStatus}</span> 

            <div className="inputDiv">
              <label htmlFor="username">Nome do usuario</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Digite seu Nome"
                  onChange={(event) => {
                    setLoginUserName(event.target.value);
                  }}
                ></input>
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Senha</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Digite sua Senha "
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                ></input>
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={loginUser}>
              <span>Entrar</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <a href="/Dashboard">'Dashboard'</a>

            <span className="forgotPassword">
              Esqueceu sua Senha? <a href="">Clique Aqui</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
