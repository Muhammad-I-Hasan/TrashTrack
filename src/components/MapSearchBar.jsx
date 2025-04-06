import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";

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
        style={{
          boxSizing: "border-box",
          border: "1px solid #ccc",
          width: "300px",
          height: "40px",
          padding: "0 12px",
          borderRadius: "4px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          fontSize: "16px",
        }}
      />
    </Autocomplete>
  );
}
