import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [language, setLanguage] = useState("English");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AppContext.Provider value={{ language, setLanguage, darkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
