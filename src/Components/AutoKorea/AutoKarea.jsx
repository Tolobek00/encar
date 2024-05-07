import React from "react";
import "./AutoKorea.css";
import AutoKoreas from "../../img/AutoKoreas.png";
import { GrFormNextLink } from "react-icons/gr";
import { IoIosArrowRoundBack } from "react-icons/io";
import redsvg from "../../img/svg/Rectangle 685.svg";
function AutoKarea() {
  return (
    <div className="bloc-container">
      <div className="Bolshoi-Blocks">
        <div className="Blocks1">
          <section>
            <img src={redsvg} alt="" />
            <h1>Честный пробег</h1>
          </section>
          <hr />
          <section>
            <img src={redsvg} alt="" />
            <h1>Сервисное обслуживание</h1>
          </section>

          <hr />

          <section>
            <img src={redsvg} alt="" />
            <h1>Выездная диагностика</h1>
          </section>
          <hr />

          <section>
            <img src={redsvg} alt="" />
            <h1>Прозрачная история а/м</h1>
          </section>
          <hr />
          <section>
            <img src={redsvg} alt="" />
            <h1>Разнообразие двигателей и трансмиссий</h1>
          </section>
          <hr />
          <section>
            <img src={redsvg} alt="" />
            <h1>Выездная диагностика</h1>
          </section>
          <hr />
          <section>
            <img src={redsvg} alt="" />
            <h1>Стоимость автомобиля</h1>
          </section>
        </div>
        <div className="Blocks2">
          <section>
            <img src={redsvg} alt="" />
            <h1>Качество сборки</h1>
          </section>
          <hr />
          <section>
            <img src={redsvg} alt="" />
            <h1>Богатые комплектации</h1>
          </section>
          <hr />

          <section>
            <img src={redsvg} alt="" />
            <h1>Европейские автомобили</h1>
          </section>
          <hr />

          <section>
            <img src={redsvg} alt="" />
            <h1>Американские автомобили </h1>
          </section>
          <hr />

          <section>
            <img src={redsvg} alt="" />
            <h1>Коммерческий транспорт </h1>
          </section>
          <hr />

          <section>
            <img src={redsvg} alt="" />
            <h1>Русификация меню</h1>
          </section>
        </div>
      </div>

      <div className="container-ak">
        <img src={AutoKoreas} alt="" />
        <h1>Честный пробег</h1>
        <p>
          Скрутить пробег в Корее нельзя, т.к. это <br /> уголовное преступление
          и никто не будет с <br /> этим связываться + пробег легко проверить{" "}
          <br /> через базы страховых компаний
        </p>

        <IoIosArrowRoundBack className="IoIosArrowRoundBack" />
        <IoIosArrowRoundBack className="GrFormNextLink" />
      </div>
    </div>
  );
}

export default AutoKarea;
