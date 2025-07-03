import { useEffect, useState } from "react";
import CourseItem from "./Components/courseItem.jsx";
import Loading from "./Components/Loading.jsx";
import { useUrl } from "../../../common/consts.js";
import { useNavigate } from "react-router-dom";
import { useResult } from "../Controller/resultController.jsx";
import * as Api from "../repo/resultRepo.js"; // Adjust the import path as necessary
import { useQuery } from "@tanstack/react-query";


export default function ResultPage() {
  const { 
    page, 
    setPage, 
    saveACourseToFav, 
    } = useResult();

  const query = useUrl();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["results", "category" , query.get("category"), page],
    queryFn:  Api.getCourses,
    keepPreviousData: true,
  });

  const navigate = useNavigate();

  const currentPage = parseInt(query.get("page")) || 1;
  console.log("Current Page:", currentPage);

  useEffect(()=>{
    document.title = "ዒልም ፈላጊ"
  })

  useEffect(() => {
    setPage(currentPage);
    // getCourses();
  }, [currentPage]);

  const getTitle = () => {
    const { category, ustaz } = {category: query.get("category"), ustaz: query.get("ustaz")};
    if(category){
        return category
    }else if(ustaz){
        return ustaz
    }
  }

  return <div className="p-2 md:p-4 flex flex-col h-screen">
    <div className="flex-1 ">
      <h1 className="text-2xl pt-4 font-bold">{getTitle()}</h1>
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
          onClick={() => navigate(`/result?category=${query.get("category")}&page=${Math.max(page - 1, 1)}`)}
          disabled={page === 1}
          className="px-4 py-2 bg-primary-light dark:bg-primary-dark disabled:bg-input_bg-light disabled:dark:bg-input_bg-dark text-white rounded"
        >
          Previous
        </button>
        <span>Page {page} of {data?.totalPages}</span>
        <button
          onClick={() => navigate(`/result?category=${query.get("category")}&page=${page + 1}`)
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
