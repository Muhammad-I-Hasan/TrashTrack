import React from "react";
import { Button, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import CameraAltIcon from "@mui/icons-material/CameraAlt"; // For "Waste Scanner"
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"; // For "Waste Catalog"
import ScheduleIcon from "@mui/icons-material/Schedule"; // For "Trash Schedule"
import LocationOnIcon from "@mui/icons-material/LocationOn"; // For "Locate Depot"
import LabelIcon from "@mui/icons-material/Label"; // For "Create Waste Labels"
import "../App.css";
import logo from "../images/Trash-Track-Logo1.png";

export default function Home() {
  return (
    <div className="page" style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
      {/* Top Bar with Settings Button */}
      <Box sx={{ position: "absolute", top: 30, right: 30 }}> {/* Adjusted right to move the button slightly left */}
        <Link to="/settings">
          <IconButton color="primary" aria-label="settings" sx={{ fontSize: "3.5rem" }}> {/* Increased font size */}
            <SettingsIcon fontSize="inherit" />
          </IconButton>
        </Link>
      </Box>

      {/* Main Content Area */}
      <div className="content" style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "center", justifyContent: "center", padding: "20px" }}>
        {/* Logo Display */}
        <Box
          sx={{
            marginBottom: "20px",
            width: "350px",
            height: "350px",
            backgroundImage: `url(${logo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
          }}
        />

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", width: "100%", maxWidth: "400px", marginTop: "-20px" }}>
          <Link to="/waste-scanner" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" fullWidth sx={{ height: "60px", fontSize: "18px", textTransform: "none", display: "flex", alignItems: "center" }}>
              <CameraAltIcon sx={{ marginRight: "10px" }} />
              Waste Scanner
            </Button>
          </Link>
          <Link to="/Catalog" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" fullWidth sx={{ height: "60px", fontSize: "18px", textTransform: "none", display: "flex", alignItems: "center" }}>
              <LibraryBooksIcon sx={{ marginRight: "10px" }} />
              Waste Catalog
            </Button>
          </Link>
          <Link to="/trashSchedule" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" fullWidth sx={{ height: "60px", fontSize: "18px", textTransform: "none", display: "flex", alignItems: "center" }}>
              <ScheduleIcon sx={{ marginRight: "10px" }} />
              Trash Schedule
            </Button>
          </Link>
          <Link to="/locateDepot" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" fullWidth sx={{ height: "60px", fontSize: "18px", textTransform: "none", display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{ marginRight: "10px" }} />
              Locate Depot
            </Button>
          </Link>
          <Link to="/createLabels" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" fullWidth sx={{ height: "60px", fontSize: "18px", textTransform: "none", display: "flex", alignItems: "center" }}>
              <LabelIcon sx={{ marginRight: "10px" }} />
              Make a Waste Label
            </Button>
          </Link>
        </Box>
      </div>
    </div>
  );
}
