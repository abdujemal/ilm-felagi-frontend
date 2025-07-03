import { createContext, useContext, useState } from "react";
import * as Api from "../repo/homeRepo.js"; // Adjust the import path as necessary
import { useQuery } from "@tanstack/react-query";

// Create context
const HomeTabContext = createContext();

// Provider
export function HomeTabProvider({ children }) {
//   const [activeTab, setActiveTab] = useState("home");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["courses", page],
    queryFn:  Api.getCourses,
    keepPreviousData: true,
    
  });


  // const getCourses = ()=>{
  //   setLoading(true);
  //   setError(null);

  //   Api.getCourses(page)
  //     .then((data) => {
  //       setCourses(data.courses);
  //       setTotalPages(data.totalPages);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // }

  return (
    <HomeTabContext.Provider value={{ data, isLoading, isError, error, page, setPage }}>
      {children}
    </HomeTabContext.Provider>
  );
}

// Custom hook
export const useHomeTab = () => useContext(HomeTabContext);
