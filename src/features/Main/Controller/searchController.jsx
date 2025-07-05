import { createContext, useContext, useEffect, useState } from "react";
import * as Repo from "../../../common/repo.js"
import toast from "react-hot-toast";

// Create context
const SearchContext = createContext();

// Provider
export function SearchProvider({ children }) {
//   const [activeTab, setActiveTab] = useState("home");
  const [page, setPage] = useState(1);
  
  const [Updateddata, setData] = useState(null)

  const saveACourseToFav = (course, data) => {
    Repo.saveCourseToFav(course, () => {
      // Update the course in the data
      const updatedCourses = Updateddata.courses.map(c => 
        c._id === course._id ? { ...c, fav: !course.fav } : c
      );
      // Update the data with the new courses
      const updatedData = {
        ...data,
        courses: updatedCourses,
      };      
      setData(updatedData);
      toast.success("በተሳካ ሁኔታ ተመዝግቧል!")

    });
  }


  return (
    <SearchContext.Provider value={{ 
      Updateddata,
      saveACourseToFav, 
      setData,
      page, 
      setPage, 
    }}>
      {children}
    </SearchContext.Provider>
  );
}

// Custom hook
export const useSearch = () => useContext(SearchContext);
