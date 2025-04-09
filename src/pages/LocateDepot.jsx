import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import LocationSelector from "../components/LocationSelector";
import DepotOption from "../components/DepotOption";
import MapComponent from "../components/MapComponent";
import MapSearchBar from "../components/MapSearchBar";
import depotLocations from "../data/depotLocations";

// Helper function: Haversine formula to calculate distance (in km)
const haversineDistance = (lat1, lng1, lat2, lng2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export default function LocateDepot() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchCenter, setSearchCenter] = useState(null);
  const [highlightedDepot, setHighlightedDepot] = useState(null);

  // Use browser geolocation to set the initial location.
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

  // When the search bar selects a new location, update center and current location.
  const handlePlaceChanged = (newCenter) => {
    setSearchCenter(newCenter);
    setCurrentLocation(newCenter);
  };

  // Calculate depot distances using the Haversine formula and sort by distance.
  const depotLocationsWithDistance = currentLocation
    ? depotLocations
        .map((depot) => ({
          ...depot,
          distance: haversineDistance(
            currentLocation.lat,
            currentLocation.lng,
            depot.lat,
            depot.lng
          ).toFixed(2),
        }))
        .sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance))
    : depotLocations;

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
      <Navbar pageTitle="Locate Depot" />
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
          {/* Place the search bar above the map */}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MapSearchBar onPlaceChanged={handlePlaceChanged} />
          </div>
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
              locationData={depotLocations}
              center={searchCenter || { lat: 51.0447, lng: -114.0719 }}
              highlightedDepot={highlightedDepot}
            />
          </div>
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            paddingBottom: "5rem",
          }}
        >
          <LocationSelector>
            {depotLocationsWithDistance.map((location, index) => (
              <DepotOption
                key={index}
                name={location.name}
                distance={
                  location.distance
                    ? `${location.distance} KM Away`
                    : "Distance unavailable"
                }
                lat={location.lat}
                lng={location.lng}
                onHover={(depot) => setHighlightedDepot(depot)}
                onLeave={() => setHighlightedDepot(null)}
              />
            ))}
          </LocationSelector>
        </div>
      </div>
    </div>
  );
}
