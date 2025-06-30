import React, { useEffect } from 'react'
import { useLocation, useParams } from "react-router-dom";
import { useCourseDetail } from '../Controller/courseDetailController';

const CourseDetail = () => {
    const location = useLocation();
    const data = location.state?.course;
    const {id} = useParams();

    const {  course, 
      loading, 
      error, 
      setCourse,
      getSingleCourse
     } = useCourseDetail(); // Assuming useCourseDetail is a custom hook that fetches course details

    useEffect(() => {           
        if (!data) {
           getSingleCourse(id);
        } else {
            // Assuming data is the course object
            setCourse(data);
        }
    }, [id, data]);
    return (
        <div>
            {loading ? (
                <div className="text-center text-gray-500">Loading...</div>
            ) : error ? (
                <div className="text-center text-red-500">{error}</div>
            ) : (
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">{course?.title}</h1>
                    <img src={course?.image} alt={course?.title} className="w-full h-auto rounded-lg mb-4" />
                    <p className="text-sm text-gray-600">በ{course?.ustaz}</p>
                </div>
            )}
        </div>
    )
}

export default CourseDetail
