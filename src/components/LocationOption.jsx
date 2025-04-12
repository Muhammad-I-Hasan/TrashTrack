// This page was designed by us, but code was assisted in generating with ChatGPT

import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Snackbar } from '@mui/material';
import './LocationOption.css';

export default function LocationOption({ 
  name, 
  trashDay, 
  recyclingDay 
}) {
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleToggle = () => {
    setNotificationEnabled(prev => {
      const newStatus = !prev;
      if (newStatus) {
        setOpenSnackbar(true);
      }
      return newStatus;
    });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  return (
    <>
      <div 
        className="location-option" 
        onClick={handleToggle}
      >
        <div className="location-option-content">
          <div className="location-option-text">
            <h1 className="location-option-title">{name}</h1>
            {trashDay && (
              <p className="location-option-info" style={{ color: 'green' }}>
                Trash: {trashDay}
              </p>
            )}
            {recyclingDay && (
              <p className="location-option-info" style={{ color: 'blue' }}>
                Recycling: {recyclingDay}
              </p>
            )}
          </div>
          <div className="location-option-icon">
            <NotificationsIcon 
              style={{ fontSize: 36, color: notificationEnabled ? '#007bff' : 'grey' }} 
            />
          </div>
        </div>
      </div>
      <Snackbar 
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={`Notification Enabled for "${name}"`}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </>
  );
}
