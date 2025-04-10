import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Tooltip,
  Snackbar,
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WastebasketIcon from "@mui/icons-material/DeleteOutline";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import EditIcon from "@mui/icons-material/Edit";
import Navbar from "../components/Navbar";
import { useNavigate, useLocation } from "react-router-dom";

export default function CreateLabels() {
  const navigate = useNavigate();
  const location = useLocation();

  // State variables for managing dialogs, form data, and feedback messages.
  const [openPrintPopup, setOpenPrintPopup] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const [printUnderDev, setPrintUnderDev] = useState(false);
  const [labelText, setLabelText] = useState("Recyclables");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

  // Mapping of colors to gradient backgrounds for preview.
  const colorGradient = {
    green: "linear-gradient(135deg, #43a047, #81c784)",
    blue: "linear-gradient(135deg, #2196F3, #64b5f6)",
    red: "linear-gradient(135deg, #e53935, #ef5350)",
  };

  // Update selected items when returning from the CatalogSelect page.
  useEffect(() => {
    if (location.state && location.state.selectedItems) {
      setSelectedItems(location.state.selectedItems);
    }
  }, [location.state]);

  // Handlers for various actions.
  const handlePrintClick = () => {
    // (Optional) Add validations here.
    setOpenPrintPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPrintPopup(false);
  };

  const handleHelpClick = () => {
    setOpenHelp(!openHelp);
  };

  // Navigate to CatalogSelect for item selection.
  const handleSelectItems = () => {
    navigate("/CatalogSelect", { state: { selectedItems } });
  };

  // Handler for the final Print button in the dialog.
  const handleFinalPrint = () => {
    setPrintUnderDev(true);
    setOpenPrintPopup(false);
  };

  const handleClosePrintSnackbar = () => {
    setPrintUnderDev(false);
  };

  return (
    <Box
      className="page"
      sx={{
        backgroundColor: "#f0f0f0",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar Header */}
      <Navbar pageTitle="Make a Waste Label" />

      {/* Help Snackbar */}
      <Snackbar
        open={openHelp}
        onClose={() => setOpenHelp(false)}
        message="Step 1: Select a color. Step 2: Enter the text on the label. Step 3: (Optional) Select items to include on your label. Step 4: Click 'Print' to preview."
        autoHideDuration={6000}
      />

      {/* Under-Development Snackbar */}
      <Snackbar
        open={printUnderDev}
        onClose={handleClosePrintSnackbar}
        message="Print feature under development."
        autoHideDuration={4000}
      />

      {/* Main Form Content */}
      <Box
        className="content"
        sx={{
          flex: 1,
          p: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            maxWidth: "500px",
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0px 6px 16px rgba(0,0,0,0.15)",
            p: 4,
            position: "relative",
          }}
        >
          {/* Help Button */}
          <Tooltip title="Help">
            <IconButton
              onClick={handleHelpClick}
              sx={{ position: "absolute", top: 16, right: 16 }}
            >
              <HelpOutlineIcon />
            </IconButton>
          </Tooltip>

          {/* Page Title */}
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: "bold",
              textAlign: "center",
              color: "#333",
            }}
          >
            Make a Waste Label
          </Typography>

          {/* Color Dropdown */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="color-label">Color</InputLabel>
            <Select
              labelId="color-label"
              id="color-select"
              label="Color"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <MenuItem value="">
                <em>Select a color</em>
              </MenuItem>
              <MenuItem value="green">Green</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="red">Red</MenuItem>
            </Select>
          </FormControl>

          {/* Text on Label Field */}
          <TextField
            fullWidth
            id="label-text"
            label="Text on Label"
            placeholder="Type of Trash (e.g., Recyclables)"
            helperText="Examples: Recyclables, Compost, Hazardous Waste"
            variant="outlined"
            value={labelText}
            onChange={(e) => setLabelText(e.target.value)}
            sx={{ mb: 3 }}
          />

          {/* Selected Items Preview (Optional) */}
          {selectedItems.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
                Selected Items:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {selectedItems.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      padding: "4px 8px",
                      backgroundColor: "#e0f7fa",
                      borderRadius: "4px",
                    }}
                  >
                    <Typography variant="body2">{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Button
              variant="outlined"
              fullWidth
              onClick={handleSelectItems}
              sx={{ textTransform: "none" }}
              startIcon={<PlaylistAddIcon />}
            >
              Select Items
            </Button>
            <Button
              variant="contained"
              fullWidth
              onClick={handlePrintClick}
              sx={{
                py: 1.5,
                fontSize: "1rem",
                textTransform: "none",
              }}
              startIcon={<PrintIcon />}
            >
              Print
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Confirmation & Preview Dialog */}
      <Dialog
        open={openPrintPopup}
        onClose={handleClosePopup}
        PaperProps={{
          sx: {
            borderRadius: "16px",
            p: 2,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            pb: 1,
            borderBottom: "1px solid #ddd",
            position: "relative",
          }}
        >
          Confirm Print
          <IconButton
            onClick={handleClosePopup}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "gray",
              p: 0,
            }}
          >
            x
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ py: 3 }}>
          <Box
            sx={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "inset 0px 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            {/* Enhanced Preview Card with dynamic background */}
            <Box
              sx={{
                background: selectedColor
                  ? colorGradient[selectedColor]
                  : "linear-gradient(135deg, #43a047, #81c784)",
                p: 4,
                borderRadius: "12px",
                textAlign: "center",
                color: "#fff",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              <WastebasketIcon sx={{ fontSize: "4rem", mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {labelText}
              </Typography>
              {selectedItems.length > 0 && (
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {selectedItems.join(", ")}
                </Typography>
              )}
              <Typography variant="body2">This is your label preview</Typography>
            </Box>

            <Box sx={{ height: 20 }} />

            {/* Action Buttons in Dialog */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                backgroundColor: "#fafafa",
                p: 3,
                borderRadius: "12px",
              }}
            >
              <Button
                variant="outlined"
                fullWidth
                onClick={handleClosePopup}
                sx={{ textTransform: "none" }}
                startIcon={<EditIcon />}
              >
                Continue Editing
              </Button>
              <Button
                variant="contained"
                fullWidth
                startIcon={<PrintIcon />}
                onClick={handleFinalPrint}
                sx={{
                  backgroundColor: "#4caf50",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#43a047" },
                }}
              >
                Print
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}