
import "./home.scss"
import Help from '../Help-for-buy/Help'
import KoreaCar from '../Korea-car/KoreaCar'
import Mohave from '../mohave/Mohave'
import Mapp from '../map/Mapp'
import CarMarket from '../CarMarket/CarMarket'
import VideoCar from "../VidoeCar/VideoCar"
import About from '../About/About'
import Contact from '../Contact/Contact'
import AutoKarea from '../AutoKorea/AutoKarea'

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
