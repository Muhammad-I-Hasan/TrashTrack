
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import "../App.css";

const translations = {
  English: {
    preferences: "Preferences",
    darkMode: "Enable Dark Mode",
    language: "Select Language",
    notifications: "Enable Notifications",
    sound: "Notification Sound",
    type: "Notification Type",
  },
  French: {
    preferences: "Préférences",
    darkMode: "Activer le mode sombre",
    language: "Choisir la langue",
    notifications: "Activer les notifications",
    sound: "Son de notification",
    type: "Type de notification",
  },
  Chinese: {
    preferences: "偏好设置",
    darkMode: "启用深色模式",
    language: "选择语言",
    notifications: "启用通知",
    sound: "通知声音",
    type: "通知类型",
  },
  Japanese: {
    preferences: "設定",
    darkMode: "ダークモードを有効にする",
    language: "言語を選択",
    notifications: "通知を有効にする",
    sound: "通知音",
    type: "通知の種類",
  },
};

export default function Settings() {
  const {
    darkMode,
    setDarkMode,
    language,
    setLanguage,
  } = useAppContext();

  // Local state just for this screen
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [notificationSound, setNotificationSound] = useState("Default");
  const [notificationType, setNotificationType] = useState("Banner");

  const t = translations[language];

  return (
    <div
      className={`page ${darkMode ? "dark-mode" : ""}`}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: darkMode ? "#121212" : "#fff",
        color: darkMode ? "#fff" : "#000",
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
        {/* Preferences Heading */}
        <h2 style={{ alignSelf: "flex-start", marginLeft: "5%", marginBottom: "10px" }}>
          {t.preferences}
        </h2>

        {/* Settings Box */}
        <div
          className="settings-box"
          style={{
            width: "90%",
            maxWidth: "500px",
            backgroundColor: darkMode ? "#1e1e1e" : "white",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: darkMode
              ? "0 4px 10px rgba(255, 255, 255, 0.1)"
              : "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Dark Mode Toggle */}
          <div className="settings-option">
            <span style={{ marginRight: "10px" }}>{t.darkMode}</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {/* Language Dropdown */}
          <div className="settings-option">
            <span style={{ marginRight: "10px" }}>{t.language}</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{ padding: "5px", fontSize: "16px", flex: 1 }}
            >
              {Object.keys(translations).map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          {/* Enable Notifications Toggle */}
          <div className="settings-option">
            <span style={{ marginRight: "10px" }}>{t.notifications}</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {/* Notification Sound Dropdown */}
          <div className="settings-option">
            <span style={{ marginRight: "10px" }}>{t.sound}</span>
            <select
              value={notificationSound}
              onChange={(e) => setNotificationSound(e.target.value)}
              style={{ padding: "5px", fontSize: "16px", flex: 1 }}
            >
              <option value="Default">Default</option>
              <option value="Chime">Chime</option>
              <option value="Ding">Ding</option>
              <option value="Beep">Beep</option>
              <option value="Silent">Silent</option>
            </select>
          </div>

          {/* Notification Type Dropdown */}
          <div className="settings-option">
            <span style={{ marginRight: "10px" }}>{t.type}</span>
            <select
              value={notificationType}
              onChange={(e) => setNotificationType(e.target.value)}
              style={{ padding: "5px", fontSize: "16px", flex: 1 }}
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
