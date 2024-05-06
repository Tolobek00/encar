import React from "react";
import logo from "../assets/svg/logo2.svg";
import icon from "../assets/svg/phoneicon.svg";
import vector from "../assets/svg/Vector.svg"
import "./Footer.scss"

function Footer() {
  return (
    <footer className="footer">
      <div className="menu">
        <img src={logo} alt="" />
        <p>
          © 2022 EncarRUS. Все права защищены, согласно <br />
          ГК РФ ст. 1225 - 1551 об авторском праве. Любое <br />
          копирование материалов сайта и элементов <br />
          включая изображения строго запрещены.
        </p>
      </div>

      <div className="totext">
        <ul>
          <li>Авто из Кореии</li>
          <li>Главнвя</li>
          <li>Авто из Казахстана</li>
          <li>О компании</li>
          <li>Авто из ОАЭ</li>
          <li>Контакты</li>
          <li>Авто из Китая</li>
        </ul>
      </div>

      <div className="tocontact">
        <button className="number">
          <span
            className="icon"
            style={{ backgroundImage: `url(${icon})` }}>
            </span>
            +7(800)011-11-11
        </button>
        <p>
          <img src={vector} alt="" />
          Москва, ул. Семеновская <br />
          д 14 офис 122
        </p>
      </div>
    </footer>
  );
}

export default Footer;
