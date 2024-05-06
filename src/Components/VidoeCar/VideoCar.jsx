import React from 'react'
import "./VideoCar.css"
import Car from "../../img/Car-Section.png"
import { IoMdCheckmark } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Telegramm from "../../img/Telegramm.png"
import YouTube from "../../img/YouTube.png"

function VideoCar() {
  return (
    <div>
      <div className='section'>
        <img src={Car} alt="" />
      </div>
    <div className='Conteiner-01'>
          <h1>Автомобили под заказ </h1>
          <h3><IoMdCheckmark className='IoMdCheckmark'/> Из Южной Кореи </h3>
          <h3><IoMdCheckmark className='IoMdCheckmark'/> С доставкой по всей России </h3>
          <h3><IoMdCheckmark className='IoMdCheckmark'/> ВЫГОДА до 40% от цены на российском рынке </h3>
          <button>Получить консультацию</button>
          {/* <div className='App-TY'> 
            <img className='Telegramm' src={Telegramm} alt="" />
            <img className='Youtube' src={YouTube} alt="" />
          </div> */}
      </div>
        <a href={"https://youtu.be/nmEWqdfnw88"}>
      <div className='Container-02'>
        <div className='Play-Video'><FaPlay className='FaPlay'/></div>
        <h1>Смотреть Авто</h1>
      </div></a>
    </div>
  )
}

export default VideoCar
