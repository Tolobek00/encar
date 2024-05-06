import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.scss";
import vector from "../../assets/Vector.svg";


function Mapp() {
  useEffect(() => {
    const map1 = L.map("map1").setView([51.505, -0.09], 11);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map1);

    const map2 = L.map("map2").setView([51.505, -0.09], 11);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map2);

    return () => {
      map1.remove();
      map2.remove();
    };
  }, []);

  return (
    <div className="map">
      <div className="map-container">
        <div id="map1" style={{ height: "300px", width: "500px" }}></div>

        <section>
          <h1>Филиал Москва</h1>
          <h1>+7 (800) 011-11-11</h1>
        </section>
        <p>
          <img src={vector} alt="" />
          +7 (800) 011-11-11
        </p>
      </div>
      <div className="map-container">
        <div id="map2" style={{ height: "300px", width: "500px" }}></div>
        <section>
          <h1>Филиал Самара</h1>
          <h1>+7 (800) 011-11-11</h1>
        </section>
        <p>
          <img src={vector} alt="" />
          +7 (800) 011-11-11
        </p>
      </div>
    </div>
  );
}

export default Mapp;
