// This page was designed by us, but code was assisted in generating with ChatGPT

import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import "./MapSearchBar.css";

export default function MapSearchBar({ onPlaceChanged }) {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (auto) => {
    setAutocomplete(auto);
  };

  const handlePlaceChanged = () => {
    if (autocomplete && autocomplete.getPlace) {
      const place = autocomplete.getPlace();
      if (place && place.geometry && place.geometry.location) {
        const newCenter = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        onPlaceChanged(newCenter);
      }
    }
  };

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={handlePlaceChanged}>
      <input
        type="text"
        placeholder="Search location..."
        className="map-search-bar-input"
      />
    </Autocomplete>
  );
}
