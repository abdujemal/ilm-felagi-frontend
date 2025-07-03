import { createContext, useContext, useState } from "react";
import * as Api from "../Repo/courseDetailRepo.js"; // Adjust the import path as necessary
import * as Repo from "../../../common/repo.js"
import toast from 'react-hot-toast';
import { useAudio } from "../../AudioPlayer/Controller/audioContext.jsx";

const CDContext = createContext()

export const CourseDetailProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [course, setCourse] = useState(null);

  const { audioPlayerRef } = useAudio()

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
        document.title = `${data.title} በ${data.ustaz}`;
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }

  const playFromSec = (seconds) => {
    const audioEl = audioPlayerRef.current?.audio?.current;

    if (audioEl) {
      audioEl.currentTime = seconds; // ⏱️ start at 15 seconds
      audioEl.play();
    }
  };

  const saveCourseToFav = () => {
    Repo.saveCourseToFav(course, ()=>{setCourse((prev) => ({ ...prev, fav: !prev.fav }))})
    toast.success(!course.fav ? "በተሳካ ሁኔታ ተመዝግቧል!" : "በተሳካ ሁኔታ ጠፍቷል!")
  }

  return (
    <CDContext.Provider value={{ 
      course, 
      loading, 
      error, 
      setCourse,
      saveCourseToFav,
      getSingleCourse,
      playFromSec
     }}>
      {children}
    </CDContext.Provider>
  )
}


export const useCourseDetail = () => useContext(CDContext);
