import { PAGE_SIZE, searchCourseUrl } from "../../../common/consts";
import { MyApi } from "../../../common/repo";

export const searchCourses = async ({queryKey}) => {
    console.log("getCourses called with queryKey:", queryKey);
    
    const [_key, query, page] = queryKey;
     const res = await MyApi(`${searchCourseUrl}?q=${query}&page=${page}&limit=${PAGE_SIZE}`);

   if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    const savedCoursesStr = localStorage.getItem("courses") ?? "[]";
    const savedCourses = JSON.parse(savedCoursesStr);
    const data = await res.json();
    data.courses = data.courses.map(course => {
        const savedCourse = savedCourses.find(c => c._id === course._id);
        if (savedCourse) {
            return { ...course, ...savedCourse };
        }else{
            course.fav = false; // Default value if not found in local storage
        }
        return course;
    });

    return data;
}