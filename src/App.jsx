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

function App() {
  
  return (
    <BrowserRouter>    
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<FavTab />} />
          <Route path="/contents" element={<IndexTab />} />
          <Route path="/ustazs" element={<UstazsTab />} />
          <Route path="/started-courses" element={<StartedCoursesTab />} />
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
