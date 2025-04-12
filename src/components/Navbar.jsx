// This page was designed by us, but code was assisted in generating with ChatGPT

import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CameraAltIcon from '@mui/icons-material/CameraAlt'; // For "Waste Scanner"
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'; // For "Waste Catalog"
import ScheduleIcon from '@mui/icons-material/Schedule'; // For "Trash Schedule"
import LocationOnIcon from '@mui/icons-material/LocationOn'; // For "Locate Depot"
import LabelIcon from '@mui/icons-material/Label'; // For "Create Labels"
import SettingsIcon from '@mui/icons-material/Settings'; // For "Settings"
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Navbar({ pageTitle }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav
      style={{
        position: 'relative',
        padding: '1rem',
        textAlign: 'center',
        borderBottom: '1px solid #ccc',
        background: '#4CAF50',
      }}
    >
      {/* Absolutely positioned Home link on the left */}
      <Link
        to="/"
        style={{
          position: 'absolute',
          left: '1rem',
          top: '55%',
          transform: 'translateY(-50%)',
          textDecoration: 'none',
          fontWeight: 'bold',
          color: 'black',
        }}
      >
        <HomeIcon fontSize="large" />
      </Link>

      <h1 style={{ margin: 0 }}>{pageTitle}</h1>

      {/* Hamburger Menu on the right */}
      <IconButton
        aria-label="menu"
        onClick={handleMenuOpen}
        style={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'black',
        }}
      >
        <MenuIcon fontSize='large'/>
      </IconButton>
      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {/* Waste Scanner Menu Item */}
        <MenuItem component={Link} to="/waste-scanner" onClick={handleMenuClose}>
          <CameraAltIcon sx={{ marginRight: "10px" }} />
          Waste Scanner
        </MenuItem>
        
        {/* Waste Catalog Menu Item */}
        <MenuItem component={Link} to="/Catalog" onClick={handleMenuClose}>
          <LibraryBooksIcon sx={{ marginRight: "10px" }} />
          Waste Catalog
        </MenuItem>

        {/* Trash Schedule Menu Item */}
        <MenuItem component={Link} to="/trashSchedule" onClick={handleMenuClose}>
          <ScheduleIcon sx={{ marginRight: "10px" }} />
          Trash Schedule
        </MenuItem>

        {/* Locate Depot Menu Item */}
        <MenuItem component={Link} to="/locateDepot" onClick={handleMenuClose}>
          <LocationOnIcon sx={{ marginRight: "10px" }} />
          Locate Depot
        </MenuItem>

        {/* Create Labels Menu Item */}
        <MenuItem component={Link} to="/createLabels" onClick={handleMenuClose}>
          <LabelIcon sx={{ marginRight: "10px" }} />
          Create Labels
        </MenuItem>

        {/* Settings Menu Item (added at the bottom of the menu) */}
        <MenuItem component={Link} to="/settings" onClick={handleMenuClose}>
          <SettingsIcon sx={{ marginRight: "10px" }} />
          Settings
        </MenuItem>
      </Menu>
    </nav>
  );
}

export default Navbar;
