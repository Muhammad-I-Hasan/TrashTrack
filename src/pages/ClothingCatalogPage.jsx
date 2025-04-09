import React from "react";
import { Box, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "../components/Navbar";
import ClothingImage from "/src/images/Clothing.png";
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
            Clothing
          </Typography>
  
          {/* Image */}
          <Box
            component="img"
            src={ClothingImage}
            alt="Clothing"
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
              This item must be taken to a <strong>textile recycling center</strong>.
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "6px" }}>
              Cothing of any type (Pants, sweaters etc.) should be taken to a designated drop off site to dispose of them properly. You may also take your clothing to a donation facility like Good Will.
            </Typography>
            <Typography variant="body2">
              <strong>Decomposition Time:</strong> Dependent on the type of clothing its made from
            </Typography>
          </Box>
        </Box>
      </div>
    );
  }