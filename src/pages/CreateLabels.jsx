import React from "react";
import {
  Box,
  Button,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  TextField
} from "@mui/material";
import Navbar from "../components/Navbar";

export default function CreateLabels() {
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
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            p: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
          >
            Create a Label
          </Typography>

          {/* Color Dropdown */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="color-label">Color</InputLabel>
            <Select labelId="color-label" id="color-select" label="Color" defaultValue="">
              <MenuItem value="">
                <em>Select a color</em>
              </MenuItem>
              <MenuItem value="green">Green</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="red">Red</MenuItem>
            </Select>
          </FormControl>

          {/* Title Field */}
          <TextField
            fullWidth
            id="label-title"
            label="Title"
            placeholder="Type of Trash (e.g., Recyclables)"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
            sx={{ mb: 2 }}
          />

          {/* Example Items */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Example Items:
            </Typography>
            <Button variant="outlined" size="small" sx={{ mb: 1 }}>
              Select Items
            </Button>
            <Typography variant="body2" color="textSecondary">
              No items selected
            </Typography>
          </Box>

          {/* Print Button */}
          <Button variant="contained" fullWidth>
            Print
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
