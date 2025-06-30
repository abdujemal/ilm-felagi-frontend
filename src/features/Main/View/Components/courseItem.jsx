import React from 'react'
import Button from './button'
import { IconHeart } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

const CourseItem = ({course}) => {
  return (
    <Link
        to={`/details/${course._id}`}
        state={{ course }}
        className="block"
    >
        <div className="bg-white  dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition group">
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
                    className="max-h-full max-w-full object-contain rounded transition-transform duration-300 ease-in-out group-hover:scale-125"
                />
                </div>

                {/* Heart Button */}
                <div className="absolute top-2 right-2 z-20">
                <Button icon={<IconHeart />} onClick={() => {}} isTransparent />
                </div>
            </div>

            {/* Text Content */}
            <div className="pt-2 pb-2 px-4">
                <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
                {course.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">በ{course.ustaz}</p>
            </div>
        </div>
    </Link>

  )
}
//<div
  //        key={course._id}
    //      className="relative aspect-video overflow-hidden rounded-xl shadow hover:shadow-lg transition bg-gray-100 dark:bg-gray-800"
      //  >
        //  {/* Blurred Background */}
        //   <img
        //     src={course.image}
        //     alt=""
        //     className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 opacity-40"
        //   />

        //   {/* Sharp Foreground Image */}
        //   <div className="relative z-10 flex items-center justify-center w-full h-full">
        //     <img
        //       src={course.image}
        //       alt={course.title}
        //       className="max-h-full max-w-full object-contain rounded"
        //     />
        //   </div>

        //   {/* Optional Title Overlay */}
        //   <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2 z-20">
        //     <p className=' text-xl font-bold'>{course.title}</p>
        //     <p>በ{course.ustaz}</p>
        //   </div>
        // </div> */}

export default CourseItem
