import NotFound from "./Pages/NotFound";
import "./App.css";
import KoreaCar from "./Components/Korea-car/KoreaCar";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Mohave from "./Components/mohave/Mohave";
import Mapp from "./Components/map/Mapp";
import Help from "./Components/Help-for-buy/Help";
import CarMarket from "./Components/CarMarket/CarMarket"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />}></Route>
          <Route path="/korea" element={<KoreaCar />} />
          <Route path="/map" element={<Mapp />} />
          <Route path="/mohave" element={<Mohave />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/carMarcet" element={<CarMarket/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
