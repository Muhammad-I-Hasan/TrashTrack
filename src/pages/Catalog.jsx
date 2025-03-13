import React from "react";
import SearchBar from "../components/SearchBar";
import {Button} from "@mui/material";
import Navbar from "../components/Navbar";
import {ShoppingBag, LocalDrink, Restaurant, DinnerDining, Archive, BatteryFull, Liquor, Smartphone, Newspaper, Apple, Checkroom, LocalCafe} from "@mui/icons-material";

export default function Catalog() {
  const items = [
    { name: "Plastic Bag", icon: <ShoppingBag fontSize="large" /> },
    { name: "Water Bottle", icon: <LocalDrink fontSize="large" /> },
    { name: "Plastic Cutlery", icon: <Restaurant fontSize="large" /> },
    { name: "Food Scraps", icon: <DinnerDining fontSize="large" />},
    { name: "Cardboard", icon: <Archive fontSize="large" /> },
    { name: "Battery", icon: <BatteryFull fontSize="large" /> },
    { name: "Glass Bottle", icon: <Liquor fontSize="large" /> },
    { name: "Phone/Tablet", icon: <Smartphone fontSize="large" /> },
    { name: "Newspaper", icon: <Newspaper fontSize="large" /> },
    { name: "Apple Core", icon: <Apple fontSize="large" /> },
    { name: "Clothing", icon: <Checkroom fontSize="large" /> },
    { name: "Styrofoam Cup", icon: <LocalCafe fontSize="large" /> },
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
          height: '90vh',
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
                ml: 1,
                mb: 1,
                "&:hover": {bgcolor: "#1565C0"},
              }} > Recyclables (Blue Bin)
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#43A047",
                color: "white",
                mr: 1,
                mb: 1,
                "&:hover": {bgcolor: "#2E7D32"},
              }} > Compost (Green Bin)
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#333333",
                color: "white",
                mb: 1,
                "&:hover": { bgcolor: "#000000" },
              }} > Trash (Black Bin) </Button>
          </div>
        </div>

        <div className="mt-8" style={{ marginTop: '15px', marginBottom: '15px'}}>
          <label className="text-lg font-semibold" style={{ marginTop: '10px' }}>Sort By:</label>
          <select className="ml-2 p-2 border rounded-md">
            <option>Most Popular</option>
            <option>Alphabetical (A-Z)</option>
            <option>Alphabetical (Z-A)</option>
          </select>
        </div>

        <div
          div className="mt-8 w-full max-w-md"
          style={{
            maxHeight: "400px", 
            overflowY: "auto",
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 100px)',
            gap: '15px',
            justifyItems: 'center',
            alignItems: 'center',
            border: "2px solid #ccc", 
            borderRadius: "8px", 
            padding: "10px",
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
              <span style={{ marginTop: '10px', fontSize: '15px' }}>{item.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
