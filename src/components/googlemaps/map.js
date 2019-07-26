import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";


function Map() {

  return (
    <div>
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 40.7306, lng: -73.9352 }}
        // defaultOptions={{styles: mapStyles}}
      >
     
      </GoogleMap>
    </div>
  );
}
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function TestMap() {


  return (
    <div style={{ overflow: 'hidden', borderRadius: '20px', width: "100%", height: "100%" }}>
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
