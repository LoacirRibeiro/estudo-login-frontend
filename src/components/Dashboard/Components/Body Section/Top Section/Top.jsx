import React from "react";
import "./Top.css";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from 'react-icons/bs'

// importação de imagens

import img from "../../../Assets/user (3).jpg";
import img2 from "../../../Assets/image (2).png";
import video from "../../../Assets/video.mp4";

function Top() {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Bem-Vindo ao Plantar</h1>
          <p>Olá Israel, bem-vindo de volta!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Painel de Pesquisa"></input>
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt="admin Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1> Criar e vender produtos extraordinários </h1>
          <p>
            A indústria de rápido crescimento do mundo hoje são produtos
            naturais!
          </p>

          <div className="buttons flex">
            <button className="btn"> Explorar mais</button>
            <button className="btn transparent"> Mais vendidos </button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>Meu começo</h1>

              <div className="flex">
                <span>
                  Hoje <br /> <small>4 Pedidos</small>
                </span>

                <span>
                  Este mês <br /> <small>258 Pedidos</small>
                </span>
              </div>

              <span className="flex link">
                Meus pedidos <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="image Name" />
            </div>
          </div>

          <div className="sideBarCard">
            <BsQuestionCircle className="icon" />
            <div className="cardContent">
              <div className="circle1"></div>
              <div className="circle2"></div>

              <h3>Central de ajuda</h3>
              <p>
                Está com problemas no Plantio, Entre em contato para tirar suas
                dúvidas
              </p>
              <button className="btn">Central de ajuda</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
