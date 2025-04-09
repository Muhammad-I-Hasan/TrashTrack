import React from "react";
import SearchBar from "../components/SearchBar";
import { Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { ShoppingBag, LocalDrink, Restaurant, DinnerDining, Archive, BatteryFull, Liquor, Smartphone, Newspaper, Apple, Checkroom, LocalCafe } from "@mui/icons-material";

export default function Catalog() {
  const items = [
    { name: "Plastic Bag", icon: <ShoppingBag fontSize="large" /> },
    { name: "Water Bottle", icon: <LocalDrink fontSize="large" /> },
    { name: "Plastic Cutlery", icon: <Restaurant fontSize="large" /> },
    { name: "Food Scraps", icon: <DinnerDining fontSize="large" /> },
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
    <div
      className="page"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Ensuring the height matches the other pages
        overflow: "hidden",
      }}
    >
      <Navbar pageTitle={"Catalog"} />

      {/* Content Section */}
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          alignItems: "center", // Center content horizontally
          padding: "10px", // Padding for spacing
        }}
      >
        {/* Centered Search Bar */}
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <SearchBar />
        </div>

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
                "&:hover": { bgcolor: "#1565C0" },
              }}
            >
              Blue Bin
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#43A047",
                color: "white",
                mr: 1,
                mb: 1,
                "&:hover": { bgcolor: "#2E7D32" },
              }}
            >
              Green Bin
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#333333",
                color: "white",
                mb: 1,
                "&:hover": { bgcolor: "#000000" },
              }}
            >
              Black Bin
            </Button>
          </div>
        </div>

        <div className="mt-8" style={{ marginTop: "15px", marginBottom: "15px" }}>
          <label className="text-lg font-semibold" style={{ marginTop: "10px" }}>
            Sort By:
          </label>
          <select className="ml-2 p-2 border rounded-md">
            <option>Most Popular</option>
            <option>Alphabetical (A-Z)</option>
            <option>Alphabetical (Z-A)</option>
          </select>
        </div>

        {/* Items Grid */}
        <div
          className="mt-8 w-full max-w-md"
          style={{
            maxHeight: "500px", // Adjusted max height for grid
            overflowY: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 100px)", // Restoring 3-column layout
            gap: "15px",
            justifyItems: "center",
            alignItems: "center",
            border: "2px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          {items.map((item, index) => (
            <Button
              key={index}
              variant="contained"
              style={{
                width: "100px", // Keeping width consistent
                height: "120px", // Slightly taller items vertically
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none",
                backgroundColor: "#f5f5f5",
                color: "#333",
                boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
                marginTop: "15px",
              }}
            >
              {item.icon}
              <span style={{ marginTop: "10px", fontSize: "15px" }}>{item.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
