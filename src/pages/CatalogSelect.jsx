import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Button, Box, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  ShoppingBag,
  LocalDrink,
  Restaurant,
  DinnerDining,
  Archive,
  BatteryFull,
  Liquor,
  Smartphone,
  Newspaper,
  Apple,
  Checkroom,
  LocalCafe
} from "@mui/icons-material";

export default function CatalogSelect() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOption, setSortOption] = useState("popular");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    // Navigate back to Create Labels with selected items
    navigate("/CreateLabels", { state: { selectedItems } });
  };

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

  const toggleSelectItem = (itemName) => {
    setSelectedItems((prev) => {
      const isSelected = prev.includes(itemName);
      const updatedSelection = isSelected
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName];
      console.log(`Toggled selection for "${itemName}". New selection:`, updatedSelection);
      return updatedSelection;
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Navbar pageTitle={"Catalog Select"} />

      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          height: "90vh",
        }}
      > 
        <Box
          onClick={handleBack}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: "12px",
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 24, mt: 2, mr: 0.5 }} />
          <Typography variant="body1" sx={{ mr: 31, mt: 2, fontWeight: 500 }}>
            Back to Labels
          </Typography>
        </Box>
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {selectedItems.length > 0 && (
          <div className="flex items-center mt-4 mb-2 space-x-4">
            <Button
              variant="contained"
              sx={{
                bgcolor: "#e31212",
                color: "white",
                mt: 2,
                mr: 3,
                "&:hover": { bgcolor: "#990e0e" },
              }}
              onClick={() => setSelectedItems([])}
            >
              Clear Selection
            </Button>
            
            <Button
              variant="contained"
              sx={{
                bgcolor: "#43A047",
                color: "white",
                mt: 2,
                ml: 3,
                "&:hover": { bgcolor: "#2E7D32" },
              }}
              onClick={handleBack}
            >
              Add items
            </Button>

            <p className="text-md font-semibold">{selectedItems.length} item(s) selected</p>
          </div>
        )}

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
                "&:hover": { bgcolor: "#69696e" },
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
          className="w-full max-w-md"
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
          {sortedItems.map((item, index) => {
            const isSelected = selectedItems.includes(item.name);
            return (
              <Button
                key={index}
                onClick={() => toggleSelectItem(item.name)}
                variant="contained"
                style={{
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "none",
                  backgroundColor: isSelected ? "#bbdefb" : "#f5f5f5",
                  color: "#333",
                  boxShadow: isSelected
                    ? "0 0 0 3px #2196F3"
                    : "2px 2px 6px rgba(0,0,0,0.2)",
                }}
              >
                {item.icon}
                <span style={{ marginTop: "10px", fontSize: "15px" }}>
                  {item.name}
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}