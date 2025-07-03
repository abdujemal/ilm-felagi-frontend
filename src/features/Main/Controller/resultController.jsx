import { createContext, useContext, useEffect, useState } from "react";
import * as Api from "../repo/resultRepo.js"; // Adjust the import path as necessary
import * as Repo from "../../../common/repo.js"

// Create context
const ResultContext = createContext();

// Provider
export function ResultProvider({ children }) {
//   const [activeTab, setActiveTab] = useState("home");
  const [page, setPage] = useState(1);

  // const { category } = useQuery(); 

  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ["result", "category" , category, page, ],
  //   queryFn:  Api.getCourses,
  //   keepPreviousData: true,
  // });
  
  const [Updateddata, setData] = useState(null)
  
  // useEffect(() => {
  //   if(data){
  //     setData(data)
  //   }
  // },[data])

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
    });
  }


  return (
    <ResultContext.Provider value={{ 
     
      saveACourseToFav, 
     
      page, 
      setPage, 
    }}>
      {children}
    </ResultContext.Provider>
  );
}

// Custom hook
export const useResult = () => useContext(ResultContext);
