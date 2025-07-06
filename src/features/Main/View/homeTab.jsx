import { useEffect, useState } from "react";
import { useHomeTab } from "../Controller/homeController.jsx";
import CourseItem from "./Components/courseItem.jsx";
import Loading from "./Components/Loading.jsx";
import {  useUrl } from "../../../common/consts.js";
import { useNavigate } from "react-router-dom";
import Button from "./Components/button.jsx";
import { IconArrowDown, IconArrowUp } from "@tabler/icons-react";

export default function Home() {
  const { data, isLoading, isError, error, page, setPage, saveACourseToFav, category,
      catIsError,
      catIsLoading } = useHomeTab();

  const query = useUrl();

  const navigate = useNavigate();

  const [ showAllCategory, setShowAllCategory ] = useState(false)

  const currentPage = parseInt(query.get("page")) || 1;
  console.log("Current Page:", currentPage);

  useEffect(()=>{
    document.title = "ዒልም ፈላጊ"
  })

  useEffect(() => {
    setPage(currentPage);
    // getCourses();
  }, [currentPage]);

  return <div className="p-2 md:p-4 flex  flex-col overflow-auto scrollbar-hide h-full">
    <div className="flex-1 ">
      {
        catIsLoading ? <></> :
        catIsError ? <></> :
        <div className="">
          <h1 className="text-2xl font-bold">ምድቦች</h1>
          <div className={`pt-4 flex flex-wrap gap-2 ${ showAllCategory ? "" : "h-16" } overflow-hidden`}>
            {
              category?.map((category, index)=>
                <div key={index} onClick={()=>navigate(`/result?category=${category.name}`)} className="cursor-pointer border border-nav-light dark:border-nav-dark hover:border-primary-light hover:dark:border-primary-dark hover:text-primary-light hover:dark:text-primary-dark pt-2 pb-2 pr-3 pl-3 rounded-xl bg-card-light dark:bg-card-dark">
                  {category.name}
                </div>
              )
            }
          </div>
          <div className=" flex justify-end">
            <p onClick={()=>setShowAllCategory(!showAllCategory)} className="cursor-pointer hover:underline text-primary-light flex">{ showAllCategory ? <IconArrowUp className="w-5 h-5"/> : <IconArrowDown className="w-5 h-5"/>}{showAllCategory ? "መልሰው": "ሁሉንም አሳይ"}</p>
          </div>
        </div>
      }
      <h1 className="text-2xl pt-4 font-bold">ደርሶች</h1>
      {
        isLoading ? (
          <div className=" h-3/4 flex items-center justify-center"><Loading/></div>
        ) : isError ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 md:p-4">
              {data?.courses.map(course => (
                <CourseItem 
                  key={course._id} 
                  onFavClick={()=>{
                    saveACourseToFav(course);
                  }} 
                  course={course}
                />
              ))}
            </div>
        )}
      <div className="flex justify-end gap-2 pb-8 items-center mt-4">
        <button
          onClick={() => navigate(`/?page=${Math.max(page - 1, 1)}`)}
          disabled={page === 1}
          className="px-4 py-2 bg-primary-light dark:bg-primary-dark disabled:bg-input_bg-light disabled:dark:bg-input_bg-dark text-white rounded"
        >
          Previous
        </button>
        <span>Page {page} of {data?.totalPages}</span>
        <button
          onClick={() => navigate(`/?page=${page + 1}`)
          }
          disabled={page >= data?.totalPages}
          className="px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded disabled:bg-input_bg-light disabled:dark:bg-input_bg-dark"
        >
          Next
        </button>
      </div>
    </div>
  </div>;
}
