import { createContext, useContext, useEffect, useState } from "react";
import * as Api from "../repo/homeRepo.js"; // Adjust the import path as necessary
import { useQuery } from "@tanstack/react-query";
import * as Repo from "../../../common/repo.js"
import toast from "react-hot-toast";

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

  const { data: category, isLoading: catIsLoading, isError: catIsError } = useQuery({
    queryKey: ["categories"],
    queryFn:  Api.getCategories,
    keepPreviousData: true,
    
  });

  
  const [Updateddata, setData] = useState(null)
  
  useEffect(() => {
    if(data){
      setData(data)
    }
  },[data])

  const saveACourseToFav = (course) => {
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
    <HomeTabContext.Provider value={{ 
      data: Updateddata, 
      isLoading, 
      isError, 
      saveACourseToFav, 
      error, 
      page, 
      setPage, 
      category,
      catIsError,
      catIsLoading
    }}>
      {children}
    </HomeTabContext.Provider>
  );
}

// Custom hook
export const useHomeTab = () => useContext(HomeTabContext);
