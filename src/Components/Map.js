import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// REACT-LEAFLET AND LEAFLET COMPONENTS FOR SHOWING MAPS
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

const Map = () => {
  // POSITION FROM REDUX
  const { position } = useSelector((store) => store.region[0]);
  const zoom = 5;

  // CODE FOR CENTERING THE MAP VIEW WITH ANIMATION
  function ResetCenterView(props) {
    const { selectPosition } = props;
    const map = useMap();

    useEffect(() => {
      if (selectPosition) {
        map.setView(L.latLng(selectPosition), map.getZoom(), {
          animate: true,
        });
      }
    }, [map, selectPosition]);
    return null;
  }

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <ResetCenterView selectPosition={position} />
    </MapContainer>
  );
};

export default Map;
