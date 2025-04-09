import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function LocationOption({ name }) {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '1rem', 
      border: '1px solid black', 
      borderRadius: '8px', 
      width: '80vw', 
      marginTop: '1rem',
      boxShadow: '0px 2px 8px rgba(0,0,0,0.2)' // Added shadow
    }}>
      {/* Header row with the large text name and the icon */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
        <div style={{ textAlign: 'left' }}>
          <h1 style={{
            margin: 0,
            fontSize: '1.5rem',
            whiteSpace: 'normal',         // Allows text to wrap
            wordBreak: 'break-word'         // Breaks long words if needed
          }}>
            {name}
          </h1>
          <p style={{ margin: '0' }}>Trash Day: Wednesday</p>
          <p style={{ margin: '0' }}>Compost Day: Thursday</p>
        </div>
        <NotificationsIcon style={{ color: '#777', fontSize: '3rem' }} />
      </div>
    </div>
  );
}
