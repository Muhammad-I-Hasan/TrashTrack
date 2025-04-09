import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Button } from "@mui/material";
import Navbar from "../components/Navbar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";

import { ShoppingBag, LocalDrink, Restaurant, DinnerDining, Archive, BatteryFull, Liquor, Smartphone, Newspaper, Apple, Checkroom, LocalCafe } from "@mui/icons-material";

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOption, setSortOption] = useState("popular");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  

  const items = [
    { name: "Plastic Bag", icon: <ShoppingBag fontSize="large" />, category: "trash" },
    { name: "Water Bottle", icon: <LocalDrink fontSize="large" />, category: "recyclable" },
    { name: "Plastic Cutlery", icon: <Restaurant fontSize="large" />, category: "trash" },
    { name: "Food Scraps", icon: <DinnerDining fontSize="large" />, category: "compost" },
    { name: "Cardboard", icon: <Archive fontSize="large" />, category: "recyclable" },
    { name: "Battery", icon: <BatteryFull fontSize="large" />, category: "trash" },
    { name: "Glass Bottle", icon: <Liquor fontSize="large" />, category: "recyclable" },
    { name: "Tablet", icon: <Smartphone fontSize="large" />, category: "trash" },
    { name: "Newspaper", icon: <Newspaper fontSize="large" />, category: "recyclable" },
    { name: "Apple Core", icon: <Apple fontSize="large" />, category: "compost" },
    { name: "Clothing", icon: <Checkroom fontSize="large" />, category: "trash" },
    { name: "Styrofoam Cup", icon: <LocalCafe fontSize="large" />, category: "trash" },
  ];

  
  const handleChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleNavToPage = (itemName) => {
    navigate(`/catalog/${itemName}`);
  };

  const filteredItems = selectedCategory
  ? items.filter((item) => item.category === selectedCategory)
  : items;

const searchFilteredItems = searchTerm
  ? filteredItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : filteredItems;

const sortedItems = [...searchFilteredItems].sort((a, b) => {
  if (sortOption === "az") {
    return a.name.localeCompare(b.name);
  } else if (sortOption === "za") {
    return b.name.localeCompare(a.name);
  }
  return 0;
});

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Navbar pageTitle={"Catalog"} />

      <div
        className="content"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          height: "90vh",
        }}
      >
        <SearchBar />
        <div>
          <label className="text-lg font-bold">Filter By:</label>
          <div className="flex space-x-2 mt-4 flex-wrap justify-center">
            <Button
              variant="contained"
              onClick={() => setSelectedCategory("recyclable")}
              sx={{
                bgcolor: "#1E88E5",
                color: "white",
                mb: 1,
                mr: 1,
                ml: 1,
                "&:hover": { bgcolor: "#1565C0" },
              }}
            >
              Recyclables (Blue Bin)
            </Button>

            <Button
              variant="contained"
              onClick={() => setSelectedCategory("compost")}
              sx={{
                bgcolor: "#43A047",
                color: "white",
                mr: 1,
                mb: 1,
                "&:hover": { bgcolor: "#2E7D32" },
              }}
            >
              Compost (Green Bin)
            </Button>

            <Button
              variant="contained"
              onClick={() => setSelectedCategory("trash")}
              sx={{
                bgcolor: "#333333",
                color: "white",
                mr: 1,
                mb: 1,
                "&:hover": { bgcolor: "#000000" },
              }}
            >
              Trash (Black Bin)
            </Button>

            <Button
              variant="contained"
              onClick={() => setSelectedCategory(null)}
              sx={{
                mb: 1,
                bgcolor: "#969699",
                color: "white",
                "&:hover": { bgcolor: "#69696e"},
              }}
            >
              Show All Items
            </Button>
          </div>
        </div>

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Sort By:</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={sortOption}
            label="Sort By:"
            onChange={handleChange}
          >
            <MenuItem value={"popular"}>Most Popular</MenuItem>
            <MenuItem value={"az"}>Alphabetical (A-Z)</MenuItem>
            <MenuItem value={"za"}>Alphabetical (Z-A)</MenuItem>
          </Select>
        </FormControl>

        <div
          className="mt-8 w-full max-w-md"
          style={{
            maxHeight: "400px",
            overflowY: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 100px)",
            gap: "15px",
            justifyItems: "center",
            alignItems: "center",
            border: "2px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          {sortedItems.map((item, index) => (
            <Button
              key={index}
              onClick={() => handleNavToPage(item.name)}
              variant="contained"
              style={{
                width: "100px",
                height: "100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none",
                backgroundColor: "#f5f5f5",
                color: "#333",
                boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              {item.icon}
              <span style={{ marginTop: "10px", fontSize: "15px" }}>
                {item.name}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
