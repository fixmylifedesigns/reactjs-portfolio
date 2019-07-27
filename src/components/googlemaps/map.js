import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  // Polygon,
  Marker
} from "react-google-maps";
import markericon from "../../images/giphy.gif";
function Map() {
  // let zipcode = [];
  // const BushwickPolygon = () => {
  //   return (
  //     <Polygon
  //       path={zipcode}
  //       strokeOpacity="0.8"
  //       strokeWeight="3"
  //       fillColor="#FF0000"
  //       fillOpacity="0.35"
  //     />
  //   );
  // };
  const mapSettings = {
    fullscreenControl: false,
    zoomControl: false,
    mapTypeControl: false,
  };
  return (
    <div>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 40.702, lng: -73.92 }}
        defaultOptions={ mapSettings }
      >
        {/* {BushwickPolygon()} */}
        <Marker
          position={{
            lat: 40.69,
            lng: -73.92
          }}
          icon={{
            url: markericon,
            scaledSize: new window.google.maps.Size(200, 200)
          }}
          // label={{
          //   float: "left",
          //   color: "black",
          //   fontWeight: "bold",
          //   fontSize: "12px",
          //   text: FlightLevel(pirep.altitude),
          //   background: "white",
          //   margin: "10px"
          // }}
          // onClick={() => {
          //   setSelectedPirep(pirep);
          // }}
        />
      </GoogleMap>
    </div>
  );
}
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function TestMap() {
  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: "20px",
        border: "solid 5px #282c34",
        width: "100%",
        height: "100%"
      }}
    >
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
