import React from "react";
import Navbar from "../components/Navbar"; // reusing a Navbar if available

export default function CreateLabels() {
  return (
    <div>
      <Navbar pageTitle="Create Labels" />
      <div style={{ padding: "1rem" }}>
        {/* Color Dropdown */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="color-select" style={{ marginRight: "0.5rem" }}>Color:</label>
          <select id="color-select" name="color">
            <option value="">Select a color</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            {/* Add additional colors as needed */}
          </select>
        </div>

        {/* Title Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="label-title" style={{ marginRight: "0.5rem" }}>Title:</label>
          <input
            id="label-title"
            type="text"
            placeholder="Type of Trash (e.g., Recyclables)"
            readOnly
            style={{ backgroundColor: "#f0f0f0", border: "1px solid #ccc", padding: "0.5rem" }}
          />
        </div>

        {/* Example Items */}
        <div style={{ marginBottom: "1rem" }}>
          <div style={{ marginBottom: "0.5rem" }}>
            <label>Example Items:</label>
            <button type="button" style={{ marginLeft: "1rem" }}>
              Select Items
            </button>
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