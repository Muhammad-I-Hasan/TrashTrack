import { useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState("English");
  const [notificationSound, setNotificationSound] = useState("Default");
  const [notificationType, setNotificationType] = useState("Banner");

  return (
    <div
      className="page"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar pageTitle={"Settings"} />
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        {/* Preferences Heading (OUTSIDE THE BOX) */}
        <h2 style={{ alignSelf: "flex-start", marginLeft: "5%", marginBottom: "10px" }}>
          Preferences
        </h2>

        {/* Settings Box */}
        <div
          className="settings-box"
          style={{
            width: "90%",
            maxWidth: "500px",
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Dark Mode Toggle */}
          <div className="settings-option">
            <span style={{ marginRight: "10px" }}>Enable Dark Mode</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {/* Language Selection */}
          <div className="settings-option">
            <span style={{ marginRight: "10px" }}>Select Language</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                padding: "5px",
                fontSize: "16px",
                flex: 1,
              }}
            >
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Chinese">Chinese</option>
              <option value="Japanese">Japanese</option>
            </select>
          </div>

          {/* Notification Toggle (On/Off Slider) */}
          <div className="settings-option">
            <span style={{ marginRight: "10px" }}>Enable Notifications</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {/* Notification Sound Selection */}
          <div className="settings-option">
            <span style={{ marginRight: "10px" }}>Notification Sound</span>
            <select
              value={notificationSound}
              onChange={(e) => setNotificationSound(e.target.value)}
              style={{
                padding: "5px",
                fontSize: "16px",
                flex: 1,
              }}
            >
              <option value="Default">Default</option>
              <option value="Chime">Chime</option>
              <option value="Ding">Ding</option>
              <option value="Beep">Beep</option>
              <option value="Silent">Silent</option>
            </select>
          </div>

          {/* Notification Type Selection */}
          <div className="settings-option">
            <span style={{ marginRight: "10px" }}>Notification Type</span>
            <select
              value={notificationType}
              onChange={(e) => setNotificationType(e.target.value)}
              style={{
                padding: "5px",
                fontSize: "16px",
                flex: 1,
              }}
            >
              <option value="Banner">Banner</option>
              <option value="Popup">Popup</option>
              <option value="Silent">Silent</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}