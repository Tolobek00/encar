import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/svg/logo.svg";
import icon from "../../assets/svg/phoneicon.svg";

function Header() {
  const navigate = useNavigate();

  function goToPages(Link) {
    navigate(Link);
  }
  return (
    <div>
      <header className="header">
        <div className="menu">
          <img src={logo} alt="" />
          <ul>
            <li onClick={() => goToPages("/korea-title")}>Авто из Кореи</li>
            <li onClick={() => goToPages("/")}>Авто из Казахстана</li>
            <li onClick={() => goToPages("/")}>Авто из ОАЭ</li>
            <li onClick={() => goToPages("/")}>Авто из Китая</li>
            <li onClick={() => goToPages("/aboutUs")}>О нас</li>
            <li onClick={() => goToPages("/contacts")}>Контакты</li>
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
      </header>
    </div>
  );
}

export default Header;
