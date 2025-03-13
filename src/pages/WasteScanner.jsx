// The code below was assisted in being created via ChatGPT, but the design is my own (Jaimie Marchuk)

import React, { useState, useEffect } from "react";
import { Box, Button, IconButton, Typography, Dialog, DialogTitle, DialogContent } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "../components/Navbar";
import "../App.css";
import cameraView from "../images/water-bottle.jpg"; // Import your image

export default function WasteScanner() {
  const [openDialog, setOpenDialog] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [identified, setIdentified] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
    setProcessing(true);
    setIdentified(false);
    
    setTimeout(() => {
      setProcessing(false);
      setIdentified(true);
    }, 2000); // Simulated processing delay
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setProcessing(false);
    setIdentified(false);
  };

  return (
    <div className="page" style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden", background: "#f0f0f0" }}>
      {/* Navbar */}
      <Navbar pageTitle={"Waste Scanner"} />
      
      {/* Main Content Area */}
      <div className="content" style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "center", justifyContent: "center", padding: "20px" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
          Scan Your Waste
        </Typography>

        {/* Simulated Camera Screen with Image */}
        <Box
          sx={{
            width: "80%",
            height: "60vh",
            backgroundImage: `url(${cameraView})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            border: "4px solid #333", // Added outline around camera view
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        />

        {/* Capture Button */}
        <IconButton color="primary" sx={{ fontSize: "4rem", marginTop: "20px" }} onClick={handleOpenDialog}>
          <CameraAltIcon fontSize="inherit" />
        </IconButton>
        <Typography variant="body1" sx={{ color: "#333", marginTop: "10px" }}>Tap to capture waste</Typography>
      </div>

      {/* Scan Result Popup */}
      <Dialog open={openDialog}>
        <DialogTitle>Scan Result</DialogTitle>
        {!processing && (
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{ position: "absolute", right: 10, top: 10 }}
          >
            <CloseIcon />
          </IconButton>
        )}
        <DialogContent>
          {processing && (
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              Processing waste identification...
            </Typography>
          )}
          {identified && (
            <Typography variant="body1" sx={{ marginTop: "10px", fontWeight: "bold", color: "green" }}>
              Image Identified!
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}