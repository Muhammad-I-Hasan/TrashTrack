import React from "react";
import { Button, Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import "../App.css";
import logo from "../images/Trash-Track-Logo1.png";

export default function Home() {
  return (
    <div className="page" style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
      {/* Top Bar with Settings Button */}
      <Box sx={{ position: "absolute", top: 30, right: 10 }}>
        <Link to="/settings">
          <IconButton color="primary" aria-label="settings" sx={{ fontSize: "3rem" }}>
            <SettingsIcon fontSize="inherit" />
          </IconButton>
        </Link>
      </Box>

      {/* Main Content Area */}
      <div className="content" style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "center", justifyContent: "center", padding: "20px" }}>
        {/* <Typography variant="h3" sx={{ fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
          Welcome to TrashTrack
        </Typography> */}

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
            <Button variant="contained" color="primary" fullWidth sx={{ height: "60px", fontSize: "18px", textTransform: "none" }}>
              Waste Scanner
            </Button>
          </Link>
          <Link to="/Catalog" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" fullWidth sx={{ height: "60px", fontSize: "18px", textTransform: "none" }}>
              Waste Catalog
            </Button>
          </Link>
          <Link to="/trashSchedule" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" fullWidth sx={{ height: "60px", fontSize: "18px", textTransform: "none" }}>
              Trash Schedule
            </Button>
          </Link>
          <Link to="/locateDepot" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" fullWidth sx={{ height: "60px", fontSize: "18px", textTransform: "none" }}>
              Locate Depot
            </Button>
          </Link>
          <Link to="/createLabels" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" fullWidth sx={{ height: "60px", fontSize: "18px", textTransform: "none" }}>
              Create Waste Labels
            </Button>
          </Link>
        </Box>
      </div>
    </div>
  );
}