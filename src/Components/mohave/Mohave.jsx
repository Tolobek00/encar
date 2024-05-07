import React from "react";
import "./mohave.scss"
import line from "../../assets/Rectangle 674.svg"

function Mohave() {
  return (
    <div className="mohave-container">
      <h1 className="title">Сделаем расчёт на а/м Kia <br /> Mohave 2019 года</h1>
      <div className="block-container">
        <section className="car">
          <h1>Стоимость автомобиля в Корее</h1>
          <p>По курсу на день покупки</p>
          <h2>50 млн вон</h2>
        </section>
        <section>
          <h1>Расходы в Корее</h1>
          <p>
            Доставка а/м до порта Владивосток, стоянка, перегоны, снятие а/м с
            учета, подготовка экспортных документов, растонировка (снятие темной
            пленки с передней полусферы и лобового стекла)
          </p>
          <h2 style={{marginTop: '68px'}}>3,5 млн вон</h2>
        </section>
        <section>
          <h1>Таможня</h1>
          <p>Пошлина, СБКТС, получение ЭЛПТС, перегон, комиссия брокера</p>
          <h2 style={{marginTop: '129px'}}>650 тыс руб</h2>
        </section>
        <section>
          <h1>Наша Комиссия</h1>
          <p>За поиск а/м, организацию и сопровождение сделки</p>
          <h2 style={{marginTop: '140px'}}>100 тыс руб</h2>
        </section>
        <section>
          <h1>Доставка до Москвы автовозом</h1>
          <p>
            Стоимость зависит от габаритов авто и города отправки) + Вы можете
            сами забрать а/м во Владивостоке, чтобы совершить незабываемое
            путешествие по всей России
          </p>
          <h2 style={{marginTop: '60px'}}>150 тыс вон</h2>
        </section>
        <section>
          <h1>Расходы в РФ</h1>
          <p>Комиссия банка за конвертацию валюты и перевод средств за рубеж</p>
          <h2 style={{marginTop: '130px'}}>80 тыс руб</h2>
        </section>
      </div>
      <hr style={{width: '1000px'}}/>
      <div className="price">
        <div><img src={line} alt="" /><p>Итоговая стоимость а/м под ключ</p><h1 className="red">3 280 000 руб</h1></div>
        <div><img src={line} alt="" /><p>Стоимость аналогичного а/м в РФ</p><h1>4 900 000 руб</h1></div>
      </div>
    </div>
  );
}

export default Mohave;
