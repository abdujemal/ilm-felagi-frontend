import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCourseDetail } from '../Controller/courseDetailController';
import InfoCard from './components/infoCard';
import { IconBookmark, IconCategory2, IconEdit, IconFileText, IconFileTypePdf, IconMicrophoneFilled, IconPdf, IconPercentage } from '@tabler/icons-react';
import AudioCard from './components/audioCard';
import Loading from '../../Main/View/Components/Loading.jsx';
import Button from '../../Main/View/Components/button';
import { useAudio } from '../../AudioPlayer/Controller/audioContext.jsx';
import LinearProgress from '../../../common/linearProgress.jsx';

const CourseDetail = () => {
    const location = useLocation();
    const data = location.state?.course;
    const {id} = useParams();
    const navigate = useNavigate()
    
    const { 
        setPlaylist,
         playTrack,
         playlist,
        currentCourse,
         setCurrentCourse,
         currentIndex,
         setCurrentIndex,
         isPlaying
    } = useAudio()
   
    const {  
        course, 
        loading, 
        error, 
        setCourse,
        getSingleCourse,
        saveCourseToFav,
        playFromSec,
        
     } = useCourseDetail(); // Assuming useCourseDetail is a custom hook that fetches course details

    useEffect(() => {           
        console.log({data});
        if (!data) {
            getSingleCourse(id);
        } else {
            document.title = `${data.title} በ${data.ustaz}`;
            setTimeout(()=>{
                setCourse(data);
                console.log("set course(data)");      
            }, 1000)
        }
    }, []);

    useEffect(()=>{
        console.log({course});
            
    }, [course])

    useEffect(() => {
        console.log("Current course:", currentCourse);
        if(currentCourse?._id === course?._id) {
            setCourse(currentCourse);
        }
        
    }, [currentCourse])

    const StartPlaying = (index) => {
        const playList = [];
        for(let i = 0; i < course?.courseIds?.split(",").length; i++) {
            const audioUrl = course?.courseIds?.split(",")[i];
            if (audioUrl) {
                playList.push({ title: `${course?.title} ${i + 1}`, url: audioUrl, ustaz: course?.ustaz });
                // setPlayList((prev) => [...prev, { title: `${course?.title} ${i + 1}`, url: audioUrl, ustaz: course?.ustaz }]);
            }
        }
        setCurrentIndex(index); // Start playing the first track
        setPlaylist(playList);
        setCurrentCourse(course)
    }

    const calculatePercentage = ()=>{
        const avgDuration = Number(course?.totalDuration) / Number(course?.courseIds.split(",").length);
        const duraion = Number(course?.duration) + (avgDuration * course?.currentIndex);
        return ((duraion / course?.totalDuration) * 100).toFixed(2);
    }

    
    return (
        <div className='w-full h-full'>
            {loading || course == null ? (
                <div className="flex items-center w-full justify-center h-screen text-gray-500"><Loading/></div>
            ) : error ? (
                <div className="text-center text-red-500">{error}</div>
            ) : (
                <div className=" md:p-4 md:bg-bg1-light dark:md:bg-bg1-dark rounded-lg shadow-sm md:m-4">
                    <div className=" flex items-center justify-between mb-4">
                        <h1 className="text-3xl font-bold text-center">{course?.title}</h1>
                        <Button icon={
                            <IconBookmark 
                                size={32}
                                stroke={2}
                                className={`${ course?.fav ? "fill-primary-light" : "fill-white dark:fill-gray-800" } text-primary-light `}
                            />} 
                            onClick={() => {
                                saveCourseToFav();
                            }} 
                            isTransparent 
                        />
                    </div>    
                    <div className='relative w-full h-80 mb-4 overflow-hidden'>
                        <img src={course?.image} alt={course?.title} className="absolute z-10 w-full h-80 blur-md rounded-lg mb-4" />
                        <img src={course?.image} alt={course?.title} className="absolute z-10 w-full h-80 object-contain rounded-lg mb-4" />
                        <div className={` ${ course?.duration ? "flex" : "hidden" } gap-2 pl-2 pr-2 absolute z-20 top-0 left-0 w-full h-full items-end justify-center`}>
                            <LinearProgress value={calculatePercentage()}/>
                            <Button 
                                text={"ከቆምኩበት ቀጥል"}  
                                isPrimaryColor
                                onClick={async () => {
                                    StartPlaying(course.currentIndex)
                                    await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
                                    playFromSec(course.duration)
                                }}
                            />
                        </div>
                    </div>
                    <div className='flex justify-evenly items-center  mb-4'>
                        <p></p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <InfoCard keey="እርስዎ የተማሩት መጠን" val={`${calculatePercentage()}%`} icon={<IconPercentage/>}/>
                        <InfoCard keey="ኪታቡን ያቀራው" val={course?.ustaz} icon={<IconMicrophoneFilled/>}/>
                        <InfoCard keey="ምድብ" val={course?.category} icon={<IconCategory2/>}/>
                        <InfoCard keey="የኪታቡ አዘጋጅ" val={course?.author} icon={<IconEdit/>}/>
                        <InfoCard keey="ኪታቡ በሶፍት ኮፒ" val={course?.pdfId} isPdf icon={<IconFileTypePdf/>} 
                            onTap={()=>{
                                window.open(course?.pdfId, "_blank");
                            }}
                        />
                    </div>
                    <p className='text-xl pt-2'>ድምፆች</p>
                    <div className='mt-4  grid grid-cols-1 lg:grid-cols-2 gap-2'>
                        {
                            String(course?.courseIds ?? "").split(",").map((item, index) =>(
                                <AudioCard 
                                    onTap={()=>{
                                        console.log("Playing track at index:", index);
                                        console.log("Current playlist:", playlist);
                                        StartPlaying(index);
                                    }} 
                                    isPlaying={isPlaying}
                                    isActive={currentCourse?._id == course?._id && currentIndex == index}
                                    key={index} 
                                    title={`${course?.title} ${index+1}`} 
                                    ustaz={course?.ustaz} 
                                    index={index+1} 
                                    url={item}
                                />
                            ))
                        }
                    </div>
                </div>
            )}
            <div className='h-4'></div>
        </div>
    )
}

export default CourseDetail
