import React from 'react'
import "./Contact.css"
import Zvanok from "../../img/Group 2793.png"
import Whatsapp  from '../../img/Group 25.png'
import Info from "../../img/Group 27.png"
import Telegramm from "../../img/Group 29.png"
function Contact() {
  return (
    <div className='Section-Contact'>

      <div className="Contact-div_1">
        <p>Главная → Контакты</p>
        <h1>Контактная информация</h1>
        <h6>Для оперативной связи с нами вы можете <br /> воспользоваться удобными для вас способами:</h6>
        <div className="apps-contact">
                <img src={Zvanok} alt="" />
                <img src={Info} alt="" />
                <img src={Whatsapp} alt="" />
                <img src={Telegramm} alt="" />
        </div>
      </div>
      <div className="Contact-div_2">
        <h1>Обратная связь</h1>
        <h3>Заполните форму и мы свяжемся <br />  с вами как можно скорее</h3>
        <input className='Contact-div_2_inp1' type="Number" placeholder='Введите ваш телефон *' /> 
        <input className='Contact-div_2_inp2' type="name" placeholder='Введите ваше имя' />
        <input className='Contact-div_2_inp3' type="text" placeholder='Напишите ваш вопрос' />
        <button>Отправить форму</button><br />
        <div className="check-box-text">
        <input type="checkbox" /><h4>Согласен с политикой конфиденциальности</h4>
        </div>
      </div>
    </div>
  )
}

export default Contact
