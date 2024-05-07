import React from "react";
import "./Kmh.css";
import KmhImg from "../../assets/img/Kmh.png";
import Play from "../../assets/img/svg/Play.svg";
import Red from "../../assets/img/svg/red-suz.svg";
function Kmh() {
  return (
    <div className="main">
      <h1>Пример видеообзора</h1>
      <p>Как выглядит осмотр авто на примере Hyundai Palisade</p>
      <div className="Kmh">
        <a href="https://youtu.be/mqKJFplp93g?si=r-dG2G8hGdnC8Oy-"><img className="Play" src={Play} alt="" /></a>
        <img className="Red" src={Red} alt="" />
      </div>
    </div>
  );
}

export default Kmh;
