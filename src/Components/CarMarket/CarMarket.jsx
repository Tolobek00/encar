import React from "react";
import "./CarMarket.scss";
import Car from "../../img/Car-Section.png";
import { IoMdCheckmark } from "react-icons/io";
import Korea from "../../img/Korea.png";
import China from "../../img/China.png";
import Arabi from "../../img/Arabi.png";
import Kazakstan from "../../img/Kazakstan.png";
function CarMarket() {
  return (
    <div className="container">
      <div className="section">
        <img src={Car} alt="" />
      </div>
      <div className="Conteiner-1">
        <h1>
          Анализируем <br /> мировой <span>авто-рынок</span>{" "}
        </h1>
        <p>
          в сравнении в Российским и помогаем выбрать лучший <br /> вариант не
          только по деньгам, но и по срокам.
        </p>
        <h3>
          <IoMdCheckmark className="IoMdCheckmark" /> Опыт работы более 30 лет
        </h3>
        <h4>
          <IoMdCheckmark className="IoMdCheckmark" /> Помощь с выбором авто и{" "}
          <br /> <span> страны покупки</span>
        </h4>
        <button>Получить консультацию</button>
      </div>
      {/* Container 2 */}
      <div className="Conteiner-2">
        {/* 1 Китай */}
        <div className="Container-2-1">
          <img src={China} alt="" />
          <h1>Китай</h1>
          <p>
            Электрокары и лучший <br /> китайский автопром
          </p>
        </div>

        {/* 2 Арабские Эмираты */}
        <div className="Container-2-2">
          <img src={Arabi} alt="" />
          <h1>Арабские</h1>
          <p>Уникальные авто</p>
        </div>

        {/* 3 Казахстан */}
        <div className="Container-2-3">
          <img src={Kazakstan} alt="" />
          <h1>Казахстан</h1>
          <p>Только новые авто без пробега</p>
        </div>

        {/* 4 Южная Корея */}
        <div className="Container-2-4">
          <img src={Korea} alt="" />
          <h1>Корея</h1>
          <p>Лучшие европейские авто с жирными комплектациями</p>
        </div>
        {/* end*/}
      </div>
    </div>
  );
}

export default CarMarket;
