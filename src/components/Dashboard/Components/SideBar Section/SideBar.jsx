import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
// importação de imagens
import logo from "../../Assets/logo.jpg";

// importação de icones
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining, MdOutlineExplore } from "react-icons/md";
import { BsCreditCard2Front, BsQuestionCircle, BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";


function SideBar() {
  return (
    <div className="sideBar grid">

      <div className="logoDiv flex">
        <img src={logo} alt-="Image Name" />
        <h2>Plantar.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          MENU RÁPIDO
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                Dash board
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">
                Meus Pdidos
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">
                Explorar
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">
                Produtos
              </span>
            </a>
          </li>

        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          CONFIGURAÇÕES
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">
                Gráficos
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">
                tendências
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">
                Contato
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsCreditCard2Front className="icon" />
              <span className="smallText">
                Cobrança
              </span>
            </a>
          </li>

        </ul>
      </div>
      
      <div className="voltar">
        <Link to={'/'}>
          <button type='submit' className='btn flex'><GoArrowLeft className='icon'/> voltar</button>
        </Link>
      </div>

      <div className="sideBarCard">
        < BsQuestionCircle className="icon"/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Central de ajuda</h3>
          <p>Está com problemas no Plantio, Entre em contato para tirar 
            suas dúvidas
          </p>
          <button className='btn'>Central de ajuda</button>
        </div>
      </div>

    </div>
  );
}

export default SideBar;
