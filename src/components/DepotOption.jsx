import React from 'react';
import DirectionsIcon from '@mui/icons-material/Directions'; // MUI Directions icon
import './DepotOption.css'; // Import the CSS file

export default function DepotOption({ name, distance, lat, lng, onHover = () => {}, onLeave = () => {} }) {
  return (
    <a
      href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
      target="_blank"
      rel="noopener noreferrer"
      className="depot-option-link"
      title="Get directions on Google Maps"
      onMouseEnter={() => onHover({ name, distance, lat, lng })}
      onMouseLeave={onLeave}
    >
      <div className="depot-option">
        <div className="depot-option-content">
          <div className="depot-option-text">
            <h1 className="depot-option-title">{name}</h1>
            <p className="depot-option-distance">{distance}</p>
          </div>
          <div className="depot-option-icon">
            <DirectionsIcon style={{ fontSize: 36, color: '#007bff' }} />
          </div>
        </div>
      </div>
    </a>
  );
}
