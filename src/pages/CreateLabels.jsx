import React from "react";
import Navbar from "../components/Navbar";

export default function CreateLabels() {
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
      {/* Header */}
      <Navbar pageTitle="Create Labels" />

      {/* Main Content Area */}
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {/* Form Container */}
        <div
          style={{
            width: "80%",
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "8px",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          {/* Color Dropdown */}
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="color-select" style={{ marginRight: "0.5rem" }}>
              Color:
            </label>
            <select id="color-select" name="color">
              <option value="">Select a color</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              {/* Additional colors as needed */}
            </select>
          </div>

          {/* Title Field */}
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="label-title" style={{ marginRight: "0.5rem" }}>
              Title:
            </label>
            <input
              id="label-title"
              type="text"
              placeholder="Type of Trash (e.g., Recyclables)"
              readOnly
              style={{
                backgroundColor: "#f0f0f0",
                border: "1px solid #ccc",
                padding: "0.5rem",
                width: "100%",
              }}
            />
          </div>

          {/* Example Items */}
          <div style={{ marginBottom: "1rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <label style={{ marginRight: "0.5rem" }}>Example Items:</label>
              <button type="button">Select Items</button>
            </div>
            <div style={{ fontStyle: "italic", color: "#777" }}>
              No items selected
            </div>
          </div>

          {/* Print Button */}
          <div style={{ textAlign: "center" }}>
            <button type="button" style={{ padding: "0.75rem 1.5rem" }}>
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}