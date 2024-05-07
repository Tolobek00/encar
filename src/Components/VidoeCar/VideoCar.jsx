import React from "react";
import "./videoCar.scss";
import Car from "../../img/Car-Section.png";
import { IoMdCheckmark } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import Telegramm from "../../img/svg/Group 2932.svg";
import YouTube from "../../img/svg/Group 2933.svg";

function VideoCar() {
  return (
    <div className="videoMaker">
      <div className="Conteiner-01">
        <h1>Автомобили под заказ </h1>
        <h3>
          <IoMdCheckmark className="IoMdCheckmark" /> Из Южной Кореи{}1
        </h3>
        <h3>
          <IoMdCheckmark className="IoMdCheckmark" /> С доставкой по всей России{" "}
        </h3>
        <h3>
          <IoMdCheckmark className="IoMdCheckmark" /> ВЫГОДА до 40% от цены на
          российском рынке{" "}
        </h3>
        <section className="message">
          <button>Получить консультацию</button>
          <div className="App-TY">
            <img className="Telegramm" src={Telegramm} alt="" />
            <img className="Youtube" src={YouTube} alt="" />
          </div>
        </section>
      </div>
      <div className="Container-02">
        <a href={"https://youtu.be/nmEWqdfnw88"}>
          <div className="Play-Video">
            <FaPlay className="FaPlay" />
          </div>
          <h1>Смотреть Авто</h1>
        </a>
      </div>
    </div>
  );
}

export default VideoCar;
