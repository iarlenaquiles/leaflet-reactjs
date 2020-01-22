import React, { useState } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

import leafGreen from './assets/leaf-green.png';
import leafRed from './assets/leaf-red.png';
import leafOrange from './assets/leaf-orange.png';
import leafShadow from './assets/leaf-shadow.png';

function App() {
  const [zoom] = useState(13);
  
  const [greenIcon] = useState({ lat: -3.771309, lng: -38.628189 });
  const [redIcon] = useState({  lat: -3.773870, lng: -38.628344 });
  const [orangeIcon] = useState({  lat: -3.773170, lng: -38.627180 });

  const positionGreenIcon = [greenIcon.lat, greenIcon.lng];
  const positionRedIcon = [redIcon.lat, redIcon.lng];
  const positionOrangeIcon = [orangeIcon.lat, orangeIcon.lng];

  const iconGreen = L.icon({
    iconUrl: leafGreen,
    shadowUrl: leafShadow,
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  });

  const iconRed = L.icon({
    iconUrl: leafRed,
    shadowUrl: leafShadow,
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  });

  const iconOrange = L.icon({
    iconUrl: leafOrange,
    shadowUrl: leafShadow,
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  });

  return (
    <Map className="map" center={positionGreenIcon} zoom={zoom}>
      <TileLayer attribution='copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>

      <Marker position={positionGreenIcon} icon={iconGreen}>
        <Popup>I'm a green leaf</Popup>
      </Marker>

      <Marker position={positionRedIcon} icon={iconRed}>
        <Popup>I'm a red leaf</Popup>
      </Marker>

      <Marker position={positionOrangeIcon} icon={iconOrange}>
        <Popup>I'm a orange leaf</Popup>
      </Marker>
    </Map>
  );
}

export default App;
