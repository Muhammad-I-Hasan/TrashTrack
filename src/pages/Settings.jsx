import "./Settings.css";
import { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="settings-page">
      <h1>Settings</h1>

      {/* Dark Mode Toggle */}
      <label className="settings-option">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        Enable Dark Mode
      </label>

      {/* Notification Preference */}
      <label className="settings-option">
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
        />
        Enable Notifications
      </label>
    </div>
  );
};

export default Settings;
