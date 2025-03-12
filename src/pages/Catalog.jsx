import React from "react";
import SearchBar from "../components/SearchBar";
import {Button} from "@mui/material";
import Navbar from "../components/Navbar";

export default function Catalog() {
  const items = [
    { name: "Plastic Bag", emoji: "🛍️"},
    { name: "Water Bottle", emoji: "💧" },
    { name: "Plastic Cutlery", emoji: "🍴" },
    { name: "Banana", emoji: "🍌"},
    { name: "Cardboard", emoji: "📦" },
    { name: "Battery", emoji: "🔋" },
    { name: "Glass Bottle", emoji: "🍾" },
    { name: "Phone/Tablet", emoji: "📱"},
    { name: "Newspaper", emoji: "📰" },
    { name: "Apple Core", emoji: "🍎" },
    { name: "Clothing", emoji: "👕" },
    { name: "Styrofoam Cup", emoji: "🥤" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Navbar pageTitle={"Catalog"} />
      
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          height: '100%',
        }}
      >
        <SearchBar />
        <div>
          <label className="text-lg font-bold">View:</label>
          <div className="flex space-x-2 mt-4">
            <Button
              variant="contained"
              sx={{
                bgcolor: "#1E88E5",
                color: "white",
                mr: 1,
                "&:hover": {bgcolor: "#1565C0"},
              }} > Recyclables (Blue Bin)
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#43A047",
                color: "white",
                mr: 1,
                "&:hover": {bgcolor: "#2E7D32"},
              }} > Compost (Green Bin)
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#333333",
                color: "white",
                "&:hover": { bgcolor: "#000000" },
              }} > Trash (Black Bin) </Button>
          </div>
        </div>

        <div className="mt-8" style={{ marginTop: '15px' }}>
          <label className="text-lg font-semibold" style={{ marginTop: '10px' }}>Sort By:</label>
          <select className="ml-2 p-2 border rounded-md">
            <option>Most Popular</option>
            <option>Alphabetical (A-Z)</option>
            <option>Alphabetical (Z-A)</option>
          </select>
        </div>

        <div
          className="grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 100px)',
            gap: '15px',
            justifyItems: 'center',
            alignItems: 'center',
          }} 
          > {items.map((item, index) => (
            <Button
              key={index}
              variant="contained"
              style={{
                width: '100px',  
                height: '100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textTransform: 'none',
                backgroundColor: '#f5f5f5',
                color: '#333',
                boxShadow: '2px 2px 6px rgba(0,0,0,0.2)',
                marginTop: '15px'
              }}
            >
              {item.icon}
              <span className="text-2xl">{item.emoji}</span>
              <span style={{ marginTop: '10px', fontSize: '15px' }}>{item.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
