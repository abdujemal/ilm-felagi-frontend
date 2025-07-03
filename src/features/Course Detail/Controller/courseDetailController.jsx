import { createContext, useContext, useState } from "react";
import * as Api from "../Repo/courseDetailRepo.js"; // Adjust the import path as necessary

const CDContext = createContext()

export const CourseDetailProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [course, setCourse] = useState(null);

  const getCoursesFromLocalStorage = () => {
    const savedCoursesStr = localStorage.getItem("courses") ?? "[]";
    return JSON.parse(savedCoursesStr);
  }

  const getSingleCourse = (id) => {
    setLoading(true);
    setError(null);

    Api.getSingleCourse(id)
      .then((data) => {
        const course = getCoursesFromLocalStorage().find((v, i, a) => v._id === data._id);
        if (course) {
          data.currentIndex = course.currentIndex;
          data.duration = course.duration;
          data.fav = course.fav;
        } 
        setCourse(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }

  const saveCourseToFav = () => {
    const savedCoursesStr = localStorage.getItem("courses") ?? "[]"
    var courses = JSON.parse(savedCoursesStr)
    if(courses.filter((v,i, a) => v._id === course._id).length > 0){
      console.log("Course already exists in local storage");
      return;
    }
    console.log("Saving course to local storage", course);
    
    courses = [...courses,{...course, fav: true}];
    localStorage.setItem("courses", JSON.stringify(courses));
    console.log("Course saved to local storage");
  }

  return (
    <CDContext.Provider value={{ 
      course, 
      loading, 
      error, 
      setCourse,
      saveCourseToFav,
      getSingleCourse
     }}>
      {children}
    </CDContext.Provider>
  )
}


export const useCourseDetail = () => useContext(CDContext);
