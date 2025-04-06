import React, { useState, useRef } from "react";
import { GoogleMap, Marker, OverlayView } from "@react-google-maps/api";

const containerStyle = { width: "100%", height: "100%" };

const MapComponent = ({ zoom = 12, locationData, center, highlightedDepot }) => {
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [tooltipHovered, setTooltipHovered] = useState(false);
  const timerRef = useRef(null);

  const clearTooltip = () => {
    setHoveredMarker(null);
  };

  const handleMarkerMouseOver = (location) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setHoveredMarker(location);
  };

  const handleMarkerMouseOut = () => {
    timerRef.current = setTimeout(() => {
      if (!tooltipHovered) {
        clearTooltip();
      }
    }, 100);
  };

  const handleTooltipMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setTooltipHovered(true);
  };

  const handleTooltipMouseLeave = () => {
    setTooltipHovered(false);
    timerRef.current = setTimeout(() => {
      clearTooltip();
    }, 100);
  };

  // Use the highlighted depot from the list if available; otherwise use the hovered marker.
  const effectiveMarker = highlightedDepot || hoveredMarker;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      options={{ disableDefaultUI: true, fullscreenControl: true }}
    >
      {locationData.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          onMouseOver={() => handleMarkerMouseOver(location)}
          onMouseOut={handleMarkerMouseOut}
        />
      ))}
      {/* Marker for the current center */}
      {center && (
        <Marker
          position={center}
          icon={{
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: "blue",
            fillOpacity: 1,
            strokeWeight: 2,
            strokeColor: "white",
          }}
        />
      )}
      {effectiveMarker && (
        <OverlayView
          position={{ lat: effectiveMarker.lat, lng: effectiveMarker.lng }}
          mapPaneName={OverlayView.FLOAT_PANE}
        >
          <div
            onMouseEnter={handleTooltipMouseEnter}
            onMouseLeave={handleTooltipMouseLeave}
            style={{
              transform: "translate(-50%, -150%)",
              display: "inline-block",
              background: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px 12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              whiteSpace: "normal",
            }}
          >
            <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
              {effectiveMarker.name}
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${effectiveMarker.lat},${effectiveMarker.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", fontSize: "0.9rem" }}
            >
              Get Directions
            </a>
          </div>
        </OverlayView>
      )}
    </GoogleMap>
  );
};

export default MapComponent;
