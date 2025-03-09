import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '1rem',
      width: '80vw',
    }}>
      <input
        type="text"
        placeholder="Search..."
        style={{
          border: '2px solid #000',
          borderRadius: '8px',
          flex: 1,
          outline: 'none',
          width: '100%',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem'
        }}
      />
      <SearchIcon style={{ marginLeft: '1rem' }}/>
    </div>
  );
}
