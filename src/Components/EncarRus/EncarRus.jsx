import React from "react";
import "../EncarRus/EncarRus.scss";
import "./EncarRus.css";
import encar from "./Assets/img/hyundai-motor-group-8kcsgLDAETg-unsplash 4.png"

export default function EncarRus() {
  return (
    <div className="sectoin container">
      <div className="title">

        <h1>
          Получите бесплатную <br /> консультацию от наших <br /> экспертов{" "}
          <span className="rus">EncarRUS</span>
        </h1>

        <p>
          <b>
            Оставьте ваши контакты и наши эксперты свяжутся с вами для <br />
            консультации по вопросам покупки авто
          </b>
        </p>
        <button>Получить скидку</button>
        <div className="img-content"> 
        </div>
        <img className="img-post" src={encar} alt="" /></div>
    </div>
  );
}
