import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
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
        <MenuItem component={Link} to="/waste-scanner" onClick={handleMenuClose}>
          Waste Scanner
        </MenuItem>
        <MenuItem component={Link} to="/Catalog" onClick={handleMenuClose}>
          Waste Catalog
        </MenuItem>
        <MenuItem component={Link} to="/trashSchedule" onClick={handleMenuClose}>
          Trash Schedule
        </MenuItem>
        <MenuItem component={Link} to="/locateDepot" onClick={handleMenuClose}>
          Locate Depot
        </MenuItem>
        <MenuItem component={Link} to="/createLabels" onClick={handleMenuClose}>
          Create Labels
        </MenuItem>
      </Menu>
    </nav>
  );
}

export default Navbar;
