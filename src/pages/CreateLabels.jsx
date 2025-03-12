import React from "react";
import Navbar from "../components/Navbar"; // Reusing your Navbar component

export default function CreateLabels() {
  return (
    <div style={{ 
      width: "80vw", 
      margin: "0 auto",
      maxWidth: "500px",
      height: "100vh", 
      display: "flex", 
      flexDirection: "column" 
    }}>
      {/* Header */}
      <Navbar pageTitle="Create Labels" />

      {/* Content Area */}
      <div style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>
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
          <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
            <label style={{ marginRight: "0.5rem" }}>Example Items:</label>
            <button type="button">Select Items</button>
          </div>
          <div style={{ fontStyle: "italic", color: "#777" }}>No items selected</div>
        </div>

        {/* Print Button */}
        <div>
          <button type="button" style={{ padding: "0.75rem 1.5rem" }}>
            Print
          </button>
        </div>
      </div>
    </div>
  );
}