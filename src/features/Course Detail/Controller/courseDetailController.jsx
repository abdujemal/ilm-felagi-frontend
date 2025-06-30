import { createContext, useContext, useState } from "react";
import * as Api from "../Repo/courseDetailRepo.js"; // Adjust the import path as necessary

const CDContext = createContext()

export const CourseDetailProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [course, setCourse] = useState(null);

  const getSingleCourse = (id) => {
    setLoading(true);
    setError(null);

    Api.getSingleCourse(id)
      .then((data) => {
        setCourse(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }


  return (
    <CDContext.Provider value={{ 
      course, 
      loading, 
      error, 
      setCourse,
      getSingleCourse
     }}>
      {children}
    </CDContext.Provider>
  )
}


export const useCourseDetail = () => useContext(CDContext);
