import { createContext, useContext, useState } from "react";
import * as Repo from "../../../common/repo.js"

const StartedCourseContext = createContext();

export function StartedCourseProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]);

    const getCourses = () => {
        setLoading(true);
        const CoursesStr = localStorage.getItem("courses") ?? "[]";
        const courses = JSON.parse(CoursesStr);
        var startedCourses = courses.filter((course) => course.duration);
        startedCourses = [...startedCourses].sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
        setCourses(startedCourses);
        setLoading(false);
    }

    const removeCourseFromFav = (course) => {
        Repo.saveCourseToFav(course, () => {
            setCourses((prevCourses) => prevCourses.filter(prev => prev._id !== course._id));
        })
    }

    return (
        <StartedCourseContext.Provider value={{ loading, courses, getCourses, removeCourseFromFav }}>
        {children}
        </StartedCourseContext.Provider>
    );
}

export const useStartedCourse = () => useContext(StartedCourseContext)