import React from 'react'
import Button from './button'
import { IconBookmark, IconMicrophone } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

const CourseItem = ({course}) => {
  const navigate = useNavigate()
  return (
    // <Link
    //     to={`/details/${course._id}`}
    //     state={{ course }}
    //     className="block"
    // >
        <div  className="bg-white  dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition group">
            <div className="relative aspect-video overflow-hidden h-40 w-full">
                {/* Blurred Background */}
                <img
                src={course.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 opacity-40"
                />

                {/* Sharp Foreground Image with Zoom on Hover */}
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <img
                      src={course.image}
                      alt={course.title}
                      onClick={()=>navigate(`/details/${course._id}`, { state: course })} 
                      className="max-h-full max-w-full cursor-pointer object-contain rounded transition-transform duration-300 ease-in-out group-hover:scale-125"
                  />
                </div>

                {/* Heart Button */}
                <div className="absolute top-2 right-2 z-10">
                <Button icon={
                  <IconBookmark 
                    size={32}
                    stroke={2}
                    className="text-primary-light fill-white dark:fill-gray-800" 
                  />} 
                  onClick={() => {}} 
                  isTransparent 
                />
                </div>

                <div className='bg-white dark:bg-gray-800 absolute top-0 left-0 pl-2 pr-2 rounded-tl-xl rounded-br-md border border-primary-light dark:border-primary-dark z-10 flex items-center justify-center gap-1'>
                  <p >{String(course.courseIds).split(",").length}</p>
                  <IconMicrophone className='w-4'/>
                </div>
            </div>

            {/* Text Content */}
            <div onClick={()=>navigate(`/details/${course._id}`, { state: course })} className=" flex cursor-pointer pt-2 pb-2 px-4">
              <div className=' flex-1'>
                <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
                {course.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">በ{course.ustaz}</p>
              </div>
              
            </div>
        </div>
    // </Link>
  )
}

export default CourseItem
