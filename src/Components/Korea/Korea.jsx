import React from 'react'
import AutoKarea from '../AutoKorea/AutoKarea'
import VideoCar from '../VidoeCar/VideoCar'
import Process from '../Process/Process'
import Help from '../Help-for-buy/Help'
import Mohave from '../mohave/Mohave'
import Kmh from '../Kmh/Kmh'
import EncarRus from '../EncarRus/EncarRus'
import Mapp from '../map/Mapp'
import Question from '../Question/Question'

function Korea() {
  return (
    <div>
      <VideoCar/>
      <Process/>
      <Help/>
      <Mohave/>
      <AutoKarea/>
      <Kmh/>
      <Question/>
      <EncarRus/>
      <Mapp/>
    </div>
  )
}

export default Korea
