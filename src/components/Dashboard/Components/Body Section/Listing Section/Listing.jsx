import React from "react";
import "./Listing.css";

// importação de icones
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

// importação de imagens
import img from "../../../Assets/image (1).png";
import img1 from "../../../Assets/image (9).png";
import img2 from "../../../Assets/image (8).png";
import img3 from "../../../Assets/image (10).png";
import user1 from '../../../Assets/user (1).jpg'
import user2 from '../../../Assets/user (2).jpg'
import user3 from '../../../Assets/user (3).jpg'
import user4 from '../../../Assets/user (4).jpg'

function Listing() {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>Minha Lista</h1>
        <button className="btn flex">
          Ver tudo <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="sectionContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Vice anual</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img1} alt="Image Name" />
          <h3>Planta de café</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="Image Name" />
          <h3>Rosa botão</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img3} alt="Image Name" />
          <h3>Aranha amarela</h3>
        </div>
      </div>

      <div className="sellers flex">

        <div className="topSellers">
          <div className="heading flex">
            <h3>Melhores vendedores</h3>
            <button className="btn flex">
              Ver tudo <BsArrowRightShort className="icon" />

            </button>
          </div>

          <div className="card flex">
            <div className="users">
                <img src={user1}  alt='User Image'/>
                <img src={user2}  alt='User Image'/>
                <img src={user3}  alt='User Image'/>
                <img src={user4}  alt='User Image'/>
            </div>

            <div className="cardText">
                <span>
                    14.566 plantas vendidas <br/>
                    <small>
                        21 vendas <span className="date"> 7 Dias</span>
                    </small>
                </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Em destaque vendedores</h3>
            <button className="btn flex">
              Ver tudo <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
                <img src={user3}  alt='User Image'/>
                <img src={user1}  alt='User Image'/>
                <img src={user4}  alt='User Image'/>
                <img src={user2}  alt='User Image'/>
            </div>

            <div className="cardText">
                <span>
                    28.566 plantas vendidas <br/>
                    <small>
                        26 vendas <span className="date"> 31 Dias</span>
                    </small>
                </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Listing;
