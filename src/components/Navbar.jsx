import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

function Navbar({ pageTitle }) {
  return (
    <nav style={{
      position: 'relative',
      padding: '1rem',
      textAlign: 'center',
      borderBottom: '1px solid #ccc',
      background: "#4CAF50"
    }}>
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
          color: 'black'
        }}
      >
        <HomeIcon fontSize='large'/>
      </Link>
      <h1 style={{ margin: 0 }}>{pageTitle}</h1>
    </nav>
  );
}

export default Navbar;