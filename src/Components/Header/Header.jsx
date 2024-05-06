import React from "react";
import logo from "../../assets/svg/logo.svg";
import "./Header.scss";
import icon from "../../assets/svg/phoneicon.svg";

function Header() {
  return (
    <Header className="header">
      <div className="menu">
        <img src={logo} alt="" />
        <ul>
          <li>Авто из Кореи</li>
          <li>Авто из Казахстана</li>
          <li>Авто из ОАЭ</li>
          <li>Авто из Китая</li>
          <li>О нас</li>
          <li>Контакты</li>
        </ul>
      </div>

      <div className="auth">
        <button className="number">
          <span
            className="icon"
            style={{ backgroundImage: `url(${icon})` }}
          ></span>
          +7(800)011-11-11
        </button>
      </div>
    </Header>
  );
}

export default Header;
