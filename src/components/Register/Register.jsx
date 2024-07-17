import React from "react";
import "./Register.css";
import "../../App.css";
import { Link , useNavigate} from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

// importação de video
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo.png";

// importação dde icones
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

function Register() {
  // useState para armazenar nossa entrada

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // onclick vamos obter o que o usuário digitou
  const createUser = (e) => {
    e.preventDefault()
    // exigiremos que o Axios crie uma API que se conecte ao servidor -
    // vamos instalar - npm install axios

    Axios.post("http://localhost:3002/register", {
      //cria variável para enviar ao servidor através da rota
      Email: email,
      UserName: userName,
      Password: password,
    }).then(() => {
      console.log("Usuário criado com sucesso")
      // No cadastro vamos redirecionar o usuário para a página de login
      navigateTo('/')
      // vamos limpar os campos também
        setEmail('')
        setUserName('')
        setPassword('')
    })
  }

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Crie e Venda Produtos Extraordinários</h2>
            <p>Adote a paz da natureza!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Já passuo Conta</span>
            <Link to={"/"}>
              <button className="btn"> Entrar</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Crie sua conta</h3>
          </div>

          <form action="" className="form grid">
            {/* aqui usaremos onChange setUserName*/}
            <div className="inputDiv">
              <label htmlFor="username">Nome do usuario</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Digite seu Nome"
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                ></input>
              </div>
            </div>
            {/* aqui usaremos onChange setEmail*/}
            <div className="inputDiv">
              <label htmlFor="Email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="Email"
                  id="Email"
                  placeholder="Digite seu Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                ></input>
              </div>
            </div>
            {/* aqui usaremos onChange setPassword*/}
            <div className="inputDiv">
              <label htmlFor="password">Senha</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Digite sua Senha "
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                ></input>
              </div>
            </div>
            {/* usaremos o  onClick junto com 'createUser' */}
            <button type="submit" className="btn flex" onClick={createUser}>
              <span>Cadastrar</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <a href="/dashboard">Dashboard</a>

            <span className="forgotPassword">
              Esqueceu sua Senha? <a href="">Clique Aqui</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
