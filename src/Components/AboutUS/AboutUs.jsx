import React from 'react'
import About from "../About/About"
import Help from '../Help-for-buy/Help'
import Mapp from '../map/Mapp'
import "./aboutUs.scss"
import HeaderUs from '../Header/HeaderUs'
import Footer from '../Footer/Footer'

function AboutUs() {
  return (
    <div className='about-item'>
      <HeaderUs/>
      <About/>
      <Help/>
      <Mapp/>
      <Footer/>
    </div>
  )
}

export default AboutUs
