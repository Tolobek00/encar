
import "./home.scss"
import Help from '../Help-for-buy/Help'
import KoreaCar from '../Korea-car/KoreaCar'
import Mohave from '../mohave/Mohave'
import Mapp from '../map/Mapp'
import Process from '../Process/Process'
import CarMarket from "../CarMarket/CarMarket"
import AutoKarea from "../AutoKorea/AutoKarea"
import Contact from "../Contact/Contact"

function Home() {
  return (
    <div>
      <CarMarket/>
      {/* <Help/> */}
      {/* <KoreaCar/> */}
      {/* <Mapp/> */}
      {/* <Mohave/> */}
      {/* <Process/> */}
      <Contact/>
      {/* <AutoKarea/> */}
      
    </div>
  )
}

export default Home
