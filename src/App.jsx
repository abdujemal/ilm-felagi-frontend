import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarLayout from "./features/Main/View/Components/sidebar.jsx";
import Home from "./features/Main/View/homeTab.jsx";
import About from "./features/Main/View/aboutTab.jsx";
import FavTab from "./features/Main/View/favTab.jsx";
import IndexTab from "./features/Main/View/indexTab.jsx";
import UstazsTab from "./features/Main/View/ustazsTab.jsx";
import SettingsTab from "./features/Main/View/settingsTab.jsx";
import FaqTab from "./features/Main/View/faqTab.jsx";
import ApplicationsTab from "./features/Main/View/applicationsTab.jsx";
import StartedCoursesTab from "./features/Main/View/startedCoursesTab.jsx";
import CourseDetail from "./features/Course Detail/View/courseDetail.jsx";
import { HomeTabProvider } from "./features/Main/Controller/homeController.jsx";
import { CourseDetailProvider } from "./features/Course Detail/Controller/courseDetailController.jsx";
import PdfPage from "./features/Course Detail/View/pdfPage.jsx";
import { FavTabProvider } from "./features/Main/Controller/favTabController.jsx";
import { StartedCourseProvider } from "./features/Main/Controller/startedCourseController.jsx";
import { ResultProvider } from "./features/Main/Controller/resultController.jsx";
import ResultPage from "./features/Main/View/resultPage.jsx";

function App() {
  
  return (
    <BrowserRouter>    
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route path="/" element={<HomeTabProvider><Home /></HomeTabProvider>} />
          <Route path="/result" element={ <ResultProvider><ResultPage/></ResultProvider> }/>
          <Route path="/details/:id" element={<CourseDetailProvider><CourseDetail /></CourseDetailProvider>} />
          <Route path="/pdf/:id" element={<CourseDetailProvider><PdfPage /></CourseDetailProvider>} />
          <Route path="/fav" element={<FavTabProvider><FavTab /></FavTabProvider>} />
          <Route path="/contents" element={<IndexTab />} />
          <Route path="/ustazs" element={<UstazsTab />} />
          <Route path="/started-courses" element={ <StartedCourseProvider><StartedCoursesTab /></StartedCourseProvider>} />
          <Route path="/settings" element={<SettingsTab />} />
          <Route path="/faq" element={<FaqTab />} />
          <Route path="/applications" element={<ApplicationsTab />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
