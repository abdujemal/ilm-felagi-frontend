import { createContext, useContext, useState } from "react";
import * as Repo from "../../../common/repo.js"

const FavTabContext = createContext();

export function FavTabProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]);

    const getCourses = () => {
        setLoading(true);
        const CoursesStr = localStorage.getItem("courses") ?? "[]";
        const courses = JSON.parse(CoursesStr);
        setCourses([...courses].filter((course) => course.fav === true).reverse);
        setLoading(false);
    }

    const removeCourseFromFav = (course) => {
        Repo.saveCourseToFav(course, () => {
            setCourses((prevCourses) => prevCourses.filter(prev => prev._id !== course._id));
        })
    }

    return (
        <FavTabContext.Provider value={{ loading, courses, getCourses, removeCourseFromFav }}>
        {children}
        </FavTabContext.Provider>
    );
}

export const useFavTab = () => useContext(FavTabContext)