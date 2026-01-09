"use client";
import { LatLngExpression } from "leaflet";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import LoadingPage from "./LoadingPage";
import { MAP_API_KEY } from "src/utils/constants";

interface Props {
  height?: number | string;
  width?: number | string;
  style?: React.CSSProperties;
  center?: LatLngExpression;
  zoom?: number;
}

const Map: React.FC<Props> = ({ center, zoom, style }) => {
  const [loaded, _] = useState(false);

  console.log(MAP_API_KEY);

  useEffect(() => {}, []);

  return loaded ? (
    <MapContainer
      style={style}
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center!}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  ) : (
    <LoadingPage rootProps={{ style }} />
  );
};

export default Map;
