// src/pages/TrashSchedule.jsx
import React, { useState, useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { Button } from "@mui/material";
import Navbar from "../components/Navbar";
import "../App.css";
import LocationSelector from "../components/LocationSelector";
import LocationOption from "../components/LocationOption"; // similar to DepotOption, but for schedule data
import MapComponent from "../components/MapComponent";
import MapSearchBar from "../components/MapSearchBar";
import scheduleData from "../data/scheduleData";

// Haversine formula to calculate distance (in km)
const haversineDistance = (lat1, lng1, lat2, lng2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export default function TrashSchedule() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchCenter, setSearchCenter] = useState(null);
  const [highlightedLocation, setHighlightedLocation] = useState(null);

  // Load the Google Maps API once for this page
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  // Get the current location from the browser
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const loc = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCurrentLocation(loc);
        setSearchCenter(loc);
      });
    }
  }, []);

  const handlePlaceChanged = (newCenter) => {
    setSearchCenter(newCenter);
    setCurrentLocation(newCenter);
  };

  // Calculate distances from currentLocation and sort scheduleData accordingly
  const scheduleDataWithDistance = currentLocation
    ? scheduleData
        .map((location) => ({
          ...location,
          distance: haversineDistance(
            currentLocation.lat,
            currentLocation.lng,
            location.lat,
            location.lng
          ).toFixed(2),
        }))
        .sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance))
    : scheduleData;

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div
      className="page"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar pageTitle="Trash Schedule" />
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Search bar at the top */}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <MapSearchBar onPlaceChanged={handlePlaceChanged} />
        </div>

        {/* Map component displaying scheduleData */}
        <div
          className="tsMap"
          style={{
            height: "35vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MapComponent
            locationData={scheduleData}
            center={searchCenter || { lat: 51.0447, lng: -114.0719 }}
            highlightedDepot={highlightedLocation}
          />
        </div>

        {/* "Edit Alerts" button placed below the map and above the list */}
        <div
          style={{
            width: "80vw",
            padding: "0 1rem", // optional horizontal padding if desired
            marginTop: "1rem",
            // marginBottom: "0.5rem", // slight padding below the button container
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button 
            variant="contained" 
            color="primary" 
            style={{ width: "100%" }} // Button spans full width of its container
          >
            Edit Alerts
          </Button>
        </div>


        {/* List of neighborhoods with schedule info */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            paddingBottom: "5rem",
          }}
        >
          <LocationSelector>
            {scheduleDataWithDistance.map((location, index) => (
              <LocationOption
                key={index}
                name={location.name}
                distance={
                  location.distance
                    ? `${location.distance} KM Away`
                    : "Distance unavailable"
                }
                trashDay={location.trashDay}
                recyclingDay={location.recyclingDay}
                onHover={(loc) => setHighlightedLocation(loc)}
                onLeave={() => setHighlightedLocation(null)}
              />
            ))}
          </LocationSelector>
        </div>
      </div>
    </div>
  );
}
