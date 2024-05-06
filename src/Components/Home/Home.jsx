
import "./home.scss"
import Help from '../Help-for-buy/Help'
import KoreaCar from '../Korea-car/KoreaCar'
import Mohave from '../mohave/Mohave'
import Mapp from '../map/Mapp'
import Process from '../Process/Process'
import CarMarket from "../CarMarket/CarMarket"

function Home() {
  return (
    <div>
      <Help/>
      <KoreaCar/>
      <Mapp/>
      <Mohave/>
      <Process/>
      <CarMarket/>
      
    </div>
  )
}

export default Home
