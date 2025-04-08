// This page was designed by us, but code was assisted in generating with ChatGPT

import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Tooltip,
  Divider,
  Stack
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Navbar from "../components/Navbar";
import "../App.css";
import cameraView from "../images/water-bottle.jpg";
import { useNavigate } from "react-router-dom";

export default function WasteScanner() {
  const [openDialog, setOpenDialog] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [identified, setIdentified] = useState(false);
  const [openInstructions, setOpenInstructions] = useState(false);
  const navigate = useNavigate();

  const handleOpenDialog = () => {
    setOpenDialog(true);
    setProcessing(true);
    setIdentified(false);

    setTimeout(() => {
      setProcessing(false);
      setIdentified(true);
    }, 2000);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setProcessing(false);
    setIdentified(false);
  };

  const handleRescan = () => {
    handleCloseDialog();
    setTimeout(() => {
      handleOpenDialog();
    }, 300);
  };

  return (
    <div
      className="page"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        background: "#f0f0f0",
      }}
    >
      <Navbar pageTitle={"Waste Scanner"} />

      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", top: 6, right: 20 }}>
          <Tooltip title="Instructions" arrow>
            <IconButton
              aria-label="instructions"
              onClick={() => setOpenInstructions(true)}
            >
              <MenuBookIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Typography variant="h5" fontWeight="bold" color="#333" mb={3}>
          Scan Your Waste
        </Typography>

        <Box
          sx={{
            width: "80%",
            height: "60vh",
            backgroundImage: `url(${cameraView})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            border: "4px solid #333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />

        <IconButton
          color="primary"
          sx={{ fontSize: "4rem", mt: 3 }}
          onClick={handleOpenDialog}
        >
          <CameraAltIcon fontSize="inherit" />
        </IconButton>
        <Typography variant="body1" color="#333" mt={1}>
          Tap to capture waste
        </Typography>
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="xs">
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          Scan Result
          <IconButton aria-label="close" onClick={handleCloseDialog}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent>
          {processing ? (
            <Typography variant="body1" textAlign="center">
              Processing waste identification...
            </Typography>
          ) : identified ? (
            <Stack spacing={2} alignItems="center">
              <Typography
                variant="body1"
                fontWeight="bold"
                color="green"
                textAlign="center"
              >
                This is a plastic water bottle. Place it in the blue bin.
              </Typography>
              <Button
                variant="contained"
                endIcon={<InfoIcon />}
                onClick={() => navigate("/waterBottleCatalog")}
                sx={{ textTransform: "none" }}
                size = 'large'
              >
                More Info
              </Button>
              <Typography variant="body2" color="textSecondary">
                Incorrect scan result?
              </Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={handleRescan}
                size = 'large'
              >
                Retry
              </Button>
            </Stack>
          ) : null}
        </DialogContent>
      </Dialog>

      <Dialog open={openInstructions} onClose={() => setOpenInstructions(false)} fullWidth maxWidth="xs">
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          How to Use the Waste Scanner
          <IconButton onClick={() => setOpenInstructions(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Typography variant="body2" mb={1}>
            1. Tap the camera icon to take a picture of your waste item with the scanner.
          </Typography>
          <Typography variant="body2" mb={1}>
            2. The scanner will process the image and identify the material.
          </Typography>
          <Typography variant="body2" mb={1}>
            3. The scanner will display what type of item it is, and an option to find more info on the scanned item.
          </Typography>
          <Typography variant="body2">
            4. If the item was not identified correctly, press "Retry" to scan again.
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
