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
      <div className="item-contaier">
        <div className="texts">
          <h1>Анализируем <br /> мировой <span>авто-рынок </span></h1>
          <p>в сравнении в Российским и помогаем выбрать лучший<br /> вариант не только по деньгам, но и по срокам.</p>
          <h4><IoMdCheckmark/> Опыт работы более 30 лет</h4>
          <h4> <IoMdCheckmark />Помощь с выбором авто и страны покупки</h4>
          <button>Получить консультацию</button>
        </div>
        <div className="blocks">
          <div>
            <section><img src={Korea} alt="" /></section>
            <section>
              <h1>Южная Корея</h1>
              <p>Лучшие европейские авто с жирными комплектациями</p>
            </section>
          </div>
          <div>
            <section><img src={Kazakstan} alt="" /></section>
            <section>
              <h1>Казахстан</h1>
              <p>Только новые авто без пробега</p>
            </section>
          </div>
          <div>
            <section><img src={Arabi} alt="" /></section>
            <section>
              <h1>Арабские Эмираты</h1>
              <p>Уникальные авто</p>
            </section>
          </div>
          <div>
            <section><img src={China} alt="" /></section>
            <section>
              <h1>Китай</h1>
              <p>Электрокары и лучший китайский автопром</p>
            </section>
          </div>
        </div>
      </div>
  );
}

export default CarMarket;
