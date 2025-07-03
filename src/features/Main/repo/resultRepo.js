import { courseByCategoryUrl, PAGE_SIZE } from "../../../common/consts";

export const getCourses = async ({queryKey}) => {
    console.log("getCourses called with queryKey:", queryKey);
    
    const [_key, type, val, page] = queryKey;

    switch(type){
        case("category"):
        return byCategory(val, page)
        break;
    }
   
}

const byCategory = async (val, page) =>{
     const res = await fetch(`${courseByCategoryUrl}/${val}?page=${page}&limit=${PAGE_SIZE}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },},);

   if (!res.ok) {
          throw new Error("Network response was not ok");
    }

    return combineWithTheSaved(res);
}

const combineWithTheSaved = async (res) => {
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
    return data
}