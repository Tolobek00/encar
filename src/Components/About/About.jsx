import React from "react";
import "./About.css";
import { Link, useNavigate } from "react-router-dom";


function About() {
  const navigate = useNavigate();

  function goToPages(Link) {
    navigate(Link);
  }
  return (
    <div className="section-container">
      <div className="Section-About">
        <p className="Glav" onClick={() => goToPages("/")}>Главная → Контакты</p>
        <div className="Ocom">
          <h1>О компании</h1>
          <h2>EncarRUS Российская динамично развивающаяся компания</h2>
          <p>
            Опыт сотрудников компании в бизнесе по экспорту <br /> автомобилей
            из Ю. Кореи составляет более 3-х лет. За это <br /> время подобрано
            и экспортировано в Россию страны СНГ <br /> и Европы более 800
            автомобилей. <br />
            <br />
            На каждом этапе подбора и экспорта с вами работают <br /> разные
            отделы компании, что позволяет контролировать <br /> весь процесc,
            от подбора авто в Ю. Кореи до доставки его <br /> до города клиента
            в России, более точечно, в отличии от <br /> компаний "одного
            человека"
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
