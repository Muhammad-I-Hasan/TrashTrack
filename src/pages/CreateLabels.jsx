import React, { useState } from "react";
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
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import EditIcon from "@mui/icons-material/Edit";
import Navbar from "../components/Navbar";

// Style choices were implemented by Sana Abdelhalem with ChatGPT's help.
export default function CreateLabels() {
  // State to control the visibility of the print confirmation popup.
  const [openPrintPopup, setOpenPrintPopup] = useState(false);

  // Handler to open the print confirmation popup when the Print button is clicked.
  const handlePrintClick = () => {
    setOpenPrintPopup(true);
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
      <Navbar pageTitle="Create Labels" />

      {/* Content Area */}
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
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: "bold",
              textAlign: "center",
              color: "#333",
            }}
          >
            Create a Waste Label
          </Typography>

          {/* Color Dropdown */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="color-label">Color</InputLabel>
            <Select
              labelId="color-label"
              id="color-select"
              label="Color"
              defaultValue=""
            >
              <MenuItem value="">
                <em>Select a color</em>
              </MenuItem>
              <MenuItem value="green">Green</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="red">Red</MenuItem>
            </Select>
          </FormControl>

          {/* Title Field with Examples */}
          <TextField
            fullWidth
            id="label-title"
            label="Title"
            placeholder="Type of Trash (e.g., Recyclables)"
            helperText="Examples: Recyclables, Compost, Hazardous Waste"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
            sx={{ mb: 3 }}
          />

          {/* Example Items */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{ mb: 1, fontWeight: 500 }}
            >
              Example Items:
            </Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{
                mb: 1,
                textTransform: "none",
              }}
            >
              Select Items
            </Button>
            <Typography variant="body2" color="textSecondary">
              No items selected
            </Typography>
          </Box>

          {/* Print Button */}
          <Button
            variant="contained"
            fullWidth
            onClick={handlePrintClick}
            sx={{
              py: 1.5,
              fontSize: "1rem",
              textTransform: "none",
            }}
          >
            Print
          </Button>
        </Box>
      </Box>

      {/* Creative Print Confirmation Popup */}
      <Dialog
        open={openPrintPopup}
        onClose={() => setOpenPrintPopup(false)}
        PaperProps={{
          sx: {
            borderRadius: "16px",
            p: 2,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
            position: "relative", // Needed for positioning the close icon
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
            onClick={() => setOpenPrintPopup(false)}
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
            {/* Label Preview with Gradient */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #4caf50, #81c784)",
                p: 3,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}
              >
                Label Title
              </Typography>
              <Typography variant="body2" sx={{ color: "#e0f2f1" }}>
                Item1, Item2, ...
              </Typography>
            </Box>
            {/* Extra space between preview and action buttons */}
            <Box sx={{ height: 20 }} />
            {/* Action Buttons */}
            <Box
              sx={{
                p: 3,
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
                backgroundColor: "#fafafa",
              }}
            >
              <Button
                variant="contained"
                fullWidth
                startIcon={<PrintIcon />}
                sx={{
                  backgroundColor: "#4caf50",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#43a047" },
                }}
              >
                Print
              </Button>
              <Button
                variant="contained"
                fullWidth
                startIcon={<EditIcon />}
                sx={{
                  backgroundColor: "#e0e0e0",
                  color: "black",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#d5d5d5" },
                }}
              >
                Continue Editing
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
