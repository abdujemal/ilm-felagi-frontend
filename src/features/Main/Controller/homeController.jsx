import { createContext, useContext, useState } from "react";

// Create context
const HomeTabContext = createContext();

// Provider
export function HomeTabProvider({ children }) {
//   const [activeTab, setActiveTab] = useState("home");

  return (
    <HomeTabContext.Provider value={{  }}>
      {children}
    </HomeTabContext.Provider>
  );
}

// Custom hook
export const useHomeTab = () => useContext(HomeTabContext);
