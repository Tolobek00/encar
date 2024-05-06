import React from "react";
import "./korea.scss";
import kia from "../../assets/Group 2827 (2).png";
import car from "../../assets/Group 2827 (1).png";

function KoreaCar() {
  return (
    <div className="container">
        <h1 className="title">Популярные а/м из Кореи</h1>
      <div className="info">
        <div className="car_container">
          <section>
            <img src={kia} alt="" />
            <h1 className="kia-k5">KIA K5 (Optima)</h1>
          </section>
          <section>
            <section className="text-line">
              <p>Пробег</p> <hr /> <h4>До 90 тыс. км.</h4>
            </section>
            <section className="text-line">
              <p>Год выпуска</p> <hr /> <h4>2018</h4>
            </section>
            <section className="text-line">
              <p>Мощность</p> <hr /> <h4>163 л.с.</h4>
            </section>
            <section className="text-line">
              <p>Двигатель</p> <hr /> <h4>2.0 л</h4>
            </section>
            <section className="text-line">
              <p>Коробка</p> <hr /> <h4>Автомат</h4>
            </section>
          </section>
          <hr className="line"/>
          <div className="price">
            <section className="white-prace">
              <h1>1 890 000 ₽</h1>
              <p>Цена на вторичном рынке в РФ</p>
            </section>
            <section className="red-price">
              <h1>1 540 000 ₽</h1>
              <p>Цена из Кореи во Владивостоке</p>
            </section>
          </div>{" "}
          <section className="button">
            <button>Подобрать аналог</button>
          </section>
        </div>
        <div className="car_container">
          <section>
            <img src={car} alt="" />
            <h1 className="kia-k5">KIA K5 (Optima)</h1>
          </section>
          <section>
            <section className="text-line">
              <p>Пробег</p> <hr /> <h4>До 90 тыс. км.</h4>
            </section>
            <section className="text-line">
              <p>Год выпуска</p> <hr /> <h4>2018</h4>
            </section>
            <section className="text-line">
              <p>Мощность</p> <hr /> <h4>163 л.с.</h4>
            </section>
            <section className="text-line">
              <p>Двигатель</p> <hr /> <h4>2.0 л</h4>
            </section>
            <section className="text-line">
              <p>Коробка</p> <hr /> <h4>Автомат</h4>
            </section>
          </section>
          <hr className="line"/>
          <div className="price">
            <section className="white-prace">
              <h1>1 890 000 ₽</h1>
              <p>Цена на вторичном рынке в РФ</p>
            </section>
            <section className="red-price">
              <h1>1 540 000 ₽</h1>
              <p>Цена из Кореи во Владивостоке</p>
            </section>
          </div>{" "}
          <section className="button">
            <button>Подобрать аналог</button>
          </section>
        </div>
        <div className="car_container">
          <section>
            <img src={kia} alt="" />
            <h1 className="kia-k5">KIA K5 (Optima)</h1>
          </section>
          <section>
            <section className="text-line">
              <p>Пробег</p> <hr /> <h4>До 90 тыс. км.</h4>
            </section>
            <section className="text-line">
              <p>Год выпуска</p> <hr /> <h4>2018</h4>
            </section>
            <section className="text-line">
              <p>Мощность</p> <hr /> <h4>163 л.с.</h4>
            </section>
            <section className="text-line">
              <p>Двигатель</p> <hr /> <h4>2.0 л</h4>
            </section>
            <section className="text-line">
              <p>Коробка</p> <hr /> <h4>Автомат</h4>
            </section>
          </section>
          <hr className="line"/>
          <div className="price">
            <section className="white-prace">
              <h1>1 890 000 ₽</h1>
              <p>Цена на вторичном рынке в РФ</p>
            </section>
            <section className="red-price">
              <h1>1 540 000 ₽</h1>
              <p>Цена из Кореи во Владивостоке</p>
            </section>
          </div>
          <section className="button">
            <button>Подобрать аналог</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default KoreaCar;
