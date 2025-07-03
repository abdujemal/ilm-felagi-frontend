import { useEffect } from "react";
import { useHomeTab } from "../Controller/homeController.jsx";
import CourseItem from "./Components/courseItem.jsx";
import Loading from "./Components/Loading.jsx";
import { useQuery } from "../../../common/consts.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { data, isLoading, isError, error, page, setPage, saveACourseToFav } = useHomeTab();

  const query = useQuery();

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

  return <div className="p-4 flex flex-col h-screen">
    <div className="flex-1 ">
      <h1 className="text-2xl font-bold">ደርሶች</h1>
      {
        isLoading ? (
          <div className=" h-3/4 flex items-center justify-center"><Loading/></div>
        ) : isError ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
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
