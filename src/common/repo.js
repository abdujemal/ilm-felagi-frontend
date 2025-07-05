export const saveCourseToFav = (course, onFinish) => {
  const savedCoursesStr = localStorage.getItem("courses") ?? "[]"
  var courses = JSON.parse(savedCoursesStr)
  if(courses.filter((v,i, a) => v._id === course._id).length > 0){
    const savedCourse = courses.filter((v,i, a) => v._id === course._id)[0]
    if(savedCourse.duration) {
      if(savedCourse.fav){
        courses = courses.map((v,i, a) => v._id !== savedCourse._id ? v : {...v, fav: false,});
        console.log("Course updated fav", false);
      }else{
        courses = courses.map((v,i, a) => v._id !== savedCourse._id ? v : {...v, fav: true,});
        console.log("Course updated fav", true);
      }
    }else{
      courses = courses.filter((v,i, a) => v._id !== savedCourse._id);
      console.log("Course removed from local storage");
    }
    localStorage.setItem("courses", JSON.stringify(courses));
      //   setCourse({...course, fav: !savedCourse.fav});
      onFinish?.();
    return;
  }
  courses = [...courses,{...course, fav: true}];
  localStorage.setItem("courses", JSON.stringify(courses));
  console.log("Course saved to local storage");
  // setCourse({...course, fav: true});
  onFinish?.();

}

export const MyApi = (url, type = "GET") => {
  return fetch(url, {
      method: type,
      headers: {
          "Content-Type": "application/json",
      },
      redirect: "follow", 
    })
}