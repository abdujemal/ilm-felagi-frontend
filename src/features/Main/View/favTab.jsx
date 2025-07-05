import React, { useEffect } from 'react'
import { useFavTab } from '../Controller/favTabController'
import Loading from './Components/Loading'
import CourseItem from './Components/courseItem'

function FavTab() {
  const { loading, courses, getCourses, removeCourseFromFav } = useFavTab()

  useEffect(()=>{
    document.title = "የተመረጡ ደርሶች"
    getCourses()
  },[])


  return (
    <div className="p-4 flex flex-col h-screen">
      <div className="flex-1 ">
        <h1 className="text-2xl font-bold pb-2">የተመረጡ ደርሶች</h1>
        {
          loading ? (
            <div className=" h-3/4 flex items-center justify-center"><Loading/></div>
          ) : 
          courses.length === 0 ? (
            <div className="h-3/4 flex items-center justify-center text-gray-500">ምንም የተመረጡ ደርሶች የሉም</div>
          ) :
          (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {courses.map(course => (
                  <CourseItem key={course._id} onFavClick={()=>{removeCourseFromFav(course)}}  course={course}/>
                ))}
              </div>
          )}
      </div>
    </div>
  )
}

export default FavTab
