import "./App.css";
import KoreaCar from "./Components/Korea-car/KoreaCar";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Mohave from "./Components/mohave/Mohave";
import Mapp from "./Components/map/Mapp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/korea" element={<KoreaCar />} />
          <Route path="/map" element={<Mapp/>}/>
          <Route path="/mohave" element={<Mohave/>}/>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
