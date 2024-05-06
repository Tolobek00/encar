import React from 'react'
import "./home.scss"
import Help from '../Help-for-buy/Help'
import KoreaCar from '../Korea-car/KoreaCar'
import Mohave from '../mohave/Mohave'
import Mapp from '../map/Mapp'

function Home() {
  return (
    <div>
      <Help/>
      <KoreaCar/>
      <Mapp/>
      <Mohave/>
    </div>
  )
}

export default Home
