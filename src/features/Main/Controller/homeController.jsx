import { createContext, useContext, useState } from "react";
import * as Api from "../repo/homeRepo.js"; // Adjust the import path as necessary

// Create context
const HomeTabContext = createContext();

// Provider
export function HomeTabProvider({ children }) {
//   const [activeTab, setActiveTab] = useState("home");

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);

  const getCourses = ()=>{
    setLoading(true);
    setError(null);

    Api.getCourses(page)
      .then((data) => {
        setCourses(data.courses);
        setTotalPages(data.totalPages);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }

  return (
    <HomeTabContext.Provider value={{ courses, loading, error, page, setPage, totalPages, getCourses }}>
      {children}
    </HomeTabContext.Provider>
  );
}

// Custom hook
export const useHomeTab = () => useContext(HomeTabContext);
