import React from "react";
import { Box, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "../components/Navbar";
import GlassBottleImage from "/src/images/GlassBottle.png";
import { useNavigate } from "react-router-dom";

export default function PlasticBagCatalogPage() {
    const navigate = useNavigate();

    const handleBack = () => {
      navigate("/catalog");
    };
  
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          background: "#f9f9f9",
        }}
      >
        {/* Navbar */}
        <Navbar pageTitle={"Product Page"} />
  
        {/* Main Content */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "16px",
          }}
        >
          {/* Back to Catalog */}
          <Box
            onClick={handleBack}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              marginBottom: "12px",
            }}
          >
            <ArrowBackIcon sx={{ fontSize: 24 }} />
            <Typography variant="body1" sx={{ marginLeft: "6px", fontWeight: 500 }}>
              Back to Catalog
            </Typography>
          </Box>
  
          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            Glass Bottle
          </Typography>
  
          {/* Image */}
          <Box
            component="img"
            src={GlassBottleImage}
            alt="Glass Bottle"
            sx={{
              maxWidth: "320px",
              maxHeight: "600px",
              objectFit: "contain",
              margin: "0 auto 16px",
              borderRadius: "8px",
              border: "2px solid #ddd",
            }}
          />
  
          {/* Info Section */}
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              color: "#444",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
              Disposal Info
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "6px" }}>
              This item belongs in the <strong>blue trash bin</strong>.
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "6px" }}>
              Glass bottles, broken or unbroken can be put loose in the blue bins since they are recyclable. You may also take them to a bottle depot facility
            </Typography>
            <Typography variant="body2">
              <strong>Decomposition Time:</strong> ~1 million years
            </Typography>
          </Box>
        </Box>
      </div>
    );
  }