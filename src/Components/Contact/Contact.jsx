import React from "react";
import "./Contact.css";
import Zvanok from "../../img/Group 2793.png";
import Whatsapp from "../../img/Group 25.png";
import Info from "../../img/Group 27.png";
import Telegramm from "../../img/Group 29.png";
import { Link, useNavigate } from "react-router-dom";

function Contact() {

  const navigate = useNavigate();

  function goToPages(Link) {
    navigate(Link);
  }
  return (
    <div className="Section-Contact">
      <div className="container">
        <div className="Contact-div_1">
          <p  onClick={() => goToPages("/")}>Главная → Контакты</p>
          <h1>Контактная информация</h1>
          <h6>
            Для оперативной связи с нами вы можете <br /> воспользоваться
            удобными для вас способами:
          </h6>
          <div className="apps-contact">
            <a href=""><img src={Zvanok} alt="" /></a>
            <a href=""><img src={Info} alt="" /></a>
            <a href=""><img src={Whatsapp} alt="" /></a>
            <a href=""><img src={Telegramm} alt="" /></a>
          </div>
        </div>
        <div className="Contact-div_2">
          <h1>Обратная связь</h1>
          <h3>
            Заполните форму и мы свяжемся <br /> с вами как можно скорее
          </h3>
          <input
            className="inputs"
            type="Number"
            placeholder="Введите ваш телефон *"
          />
          <input
            className="inputs"
            type="name"
            placeholder="Введите ваше имя"
          />
          <input
            className="inputs"
            type="text"
            placeholder="Напишите ваш вопрос"
          />
          <button>Отправить форму</button>
          <br />
          <div className="check-box-text">
            <input type="checkbox" />
            <h4>Согласен с политикой конфиденциальности</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
