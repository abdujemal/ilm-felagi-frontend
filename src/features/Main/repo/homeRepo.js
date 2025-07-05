import { categoryUrl, courseUrl, PAGE_SIZE } from "../../../common/consts.js";
import { MyApi } from "../../../common/repo.js";

export const getCourses = async ({queryKey}) => {
    console.log("getCourses called with queryKey:", queryKey);
    
    const [_key, page] = queryKey;
    const res = await MyApi(`${courseUrl}?page=${page}&limit=${PAGE_SIZE}`);

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

export const getCategories = async ({queryKey}) => {
    const res = await MyApi(categoryUrl)

    if (!res.ok) {
          throw new Error("Network response was not ok");
    }

    return res.json()
    
}