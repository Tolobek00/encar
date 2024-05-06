import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePages from "./Pages/HomePages";
import Layout from "./сomponents/Layout/Layout";
import Process from "./сomponents/Process/Process";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
