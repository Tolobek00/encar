import React from "react";
import "./question.scss";

function Question() {
  return (
    <div className="question">
      <h1 style={{margin: '0 0 -75px 110px'}}>Вопрос-ответ</h1>
      <div className="ques">
        <div>
          <h1 className="line">-</h1>
          <h1 className="text">Какие сроки поставки а/м?</h1>
        </div>
        <hr />
        <div>
          <h1 className="line">-</h1>
          <h1 className="text">Что проверяет технический специалист при осмотре а/м?</h1>
        </div>
        <section>
            <hr />
          <div>
            <h1 className="line">-</h1>
            <h1 className="text" style={{ color: "red", marginTop: '55px' }}>
              Страхуются ли автомобили при перевозке из Кореи в Россию?
            </h1>
          </div>

          <p style={{marginTop: '-35px'}}>
            Наш партнер в Корее - это официальная экспортная компания, она же
            выставляет инвойс, на ее реквизиты Вы оплачиваете а/м. <br /> До отправки
            во Владивосток, а/м хранятся у нашего партнера на охраняемой
            парковке около порта.
          </p>
        </section>
        <hr />
        <div>
          <h1 className="line">-</h1>
          <h1 className="text">
            Кто в Корее подбирает автомобили и кому мы платим, если вы
            находитесь в Москве?
          </h1>
        </div>
        <hr />
        <div>
          <h1 className="line">-</h1>
          <h1 className="text">Какие юридические гарантии есть при работе с Вашей компанией?</h1>
        </div>
        <hr />
        <div>
          <input type="checkbox" />
          <h1 className="text">
            Мы работаем строго по договору, оплата проходит в несколько этапов,
            все этапы максимально прозрачны.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Question;
