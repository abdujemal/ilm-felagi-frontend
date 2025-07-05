import React from 'react'
import Button from './button'
import { IconBookmark, IconMicrophone } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'
import LinearProgress from '../../../../common/linearProgress.jsx';

const CourseItem = ({course, onFavClick}) => {
    const navigate = useNavigate()

    const calculatePercentage = ()=>{
        const avgDuration = Number(course?.totalDuration) / Number(course?.courseIds.split(",").length);
        const duraion = Number(course?.duration) + (avgDuration * course?.currentIndex);
        return ((duraion / course?.totalDuration) * 100).toFixed(2);
    }

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
                    className={`${ course.fav ? "fill-primary-light" : "fill-white dark:fill-gray-800" } text-primary-light `}
                  />} 
                  onClick={() => onFavClick()} 
                  isTransparent 
                />
                </div>
                <div className={` ${ course.duration ? 'absolute' : "hidden" } z-20 bottom-0 left-0 w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden`}>
                  <LinearProgress value={calculatePercentage()}/>
                </div>

                <div className='bg-white dark:bg-gray-800 absolute top-0 left-0 pl-2 pr-2 rounded-tl-xl rounded-br-md border border-primary-light dark:border-primary-dark z-10 flex items-center justify-center gap-1'>
                  {/* <p >{String(course.courseIds).split(",").length}</p>
                  <IconMicrophone className='w-4'/> */}
                  {course.category}
                </div>

                <div className={`bg-white dark:bg-gray-800 absolute ${ course.duration ? "bottom-2" : "bottom-0"} right-0 pl-2 pr-2 rounded-tl-xl  border border-primary-light dark:border-primary-dark z-10 flex items-center justify-center gap-1`}>
                  <p >{String(course.courseIds).split(",").length}</p>
                  <IconMicrophone className='w-4'/>
                </div>
            </div>

            {/* Text Content */}
            <div className=" flex  pt-2 pb-2 px-4">
              <div className=' flex-1'>
                <h3 onClick={()=>navigate(`/result?title=${course.title}`)} className="text-lg cursor-pointer hover:text-primary-light hover:dark:text-primary-dark hover:underline font-semibold mb-1 text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <p onClick={()=>navigate(`/result?ustaz=${course.ustaz}`)} className="text-sm cursor-pointer hover:text-primary-light hover:dark:text-primary-dark hover:underline text-gray-600 dark:text-gray-300">በ{course.ustaz}</p>
              </div>
              
            </div>
        </div>
    // </Link>
    )
  }

export default CourseItem
