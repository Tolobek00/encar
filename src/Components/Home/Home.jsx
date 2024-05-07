import "./home.scss";
import CarMarket from "../CarMarket/CarMarket";
import Help from "../Help-for-buy/Help";
import EncarRus from "../EncarRus/EncarRus";
import Mapp from "../map/Mapp";

function Home() {
  return (
    <div className="home-container">
      <CarMarket />
      <Help/>
      <EncarRus/>
      <Mapp/>
    </div>
  );
}

export default Home;
