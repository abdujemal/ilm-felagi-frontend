import React, { useEffect } from 'react'
import PdfViewer from './components/pdfViewer'
import { useLocation, useParams } from 'react-router-dom';
import { useCourseDetail } from '../Controller/courseDetailController';
import Loading from '../../Main/View/Components/Loading';

const PdfPage = () => {
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
        <div className='w-full h-full'>
            {loading ? (
                <div className="flex items-center w-full justify-center h-full text-gray-500"><Loading/></div>
                ) : error ? (
                    <div className="text-center text-red-500">{error}</div>
                ) : (
                    <PdfViewer remoteUrl={course?.pdfId}/>
                    // <p>{course?.pdfId}</p>
                )
            }
        </div>
    )
}

export default PdfPage
