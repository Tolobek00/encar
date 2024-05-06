import React from "react";
import "./Process.scss";
import one from "../assets/svg/1.svg";
import two from "../assets/svg/2.svg";
import three from "../assets/svg/3.svg";
import four from "../assets/svg/4.svg";
import five from "../assets/svg/5.svg";
import six from "../assets/svg/6.svg";
import seven from "../assets/svg/7.svg";
import eigth from "../assets/svg/8.svg";
import vectore from "../assets/svg/Vector 16.svg";

function Process() {
  return (
    <div className="process">
      <div className="text">
        <h2>
          Процесс заказа и <br />
          покупки автомобиля
        </h2>
        <p>из Южной Кореи в компании EncarRUS</p>
      </div>

      <div className="block">
        <div className="one">
          <img src={one} alt="" />
          <img className="vector" src={vectore} alt="" />
          <p>
            Предварительная <br />
            консультация
          </p>
        </div>
        <div className="two">
        <img src={two} alt="" />
          <img className="vector" src={vectore} alt="" />
          <p>
            Заключение <br />
            договора
          </p>
        </div>
        <div className="three">
        <img src={three} alt="" />
          <img className="vector" src={vectore} alt="" />
          <p>
          Подбор подходящих <br /> 
          вариантов на площадках <br /> 
          исходя из бюджета
          </p>
        </div>
        <div className="four">
          <img src={four} alt="" />
          <img className="vector" src={vectore} alt="" />
          <p>
          Выездная диагностика <br />
          понравившегося варианта
          </p>
        </div>
        <div className="one">
          <img src={five} alt="" />
          <img className="vector" src={vectore} alt="" />
          <p>
          Фото и видео отчет на <br />
          а/м достойные вашего <br />
          внимания 
          </p>
        </div>
        <div className="six">
        <img src={six} alt="" />
          <img className="vector" src={vectore} alt="" />
          <p>
          Оплата а/м в Корею 
          </p>
        </div>
        <div className="seven">
        <img src={seven} alt="" />
          <img className="vector" src={vectore} alt="" />
          <p>
          Доставка а/м в порт <br />
          Владивосток
          </p>
        </div>
        <div className="four">
          <img src={eigth} alt="" />
          <img className="vector" src={vectore} alt="" />
          <p>
          Растаможка автомобиля, <br />
          получение ПТС и оставка <br />
          до Вашего дома
          </p></div>
      </div>
    </div>
  );
}

export default Process;
