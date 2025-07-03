import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx"; // optional for cleaner class toggling
// import { Moon, Sun, X,   Menu, Home, Heart, AlignLeft, } from "lucide-react";
import { IconMoonStars, 
  IconSunFilled,  
  IconX, 
  IconMenu2, 
  IconHome, 
  IconListLetters, 
  IconChalkboardTeacher,
  IconBrandParsinta,
  IconSettings,
  IconInfoCircle,
  IconHelpOctagon,
  IconCategory,
  IconBrandTelegram,
  IconBookmark,
} from '@tabler/icons-react'
import Button from "./button";
import SearchUI from "./search";
import AudioPlayerUi from "../../../AudioPlayer/View/AudioPlayerUi.jsx";

export default function SidebarLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block group px-4 py-2 flex gap-1 text-nav-light dark:text-nav-dark rounded hover:text-primary-light hover:bg-gray-200 dark:hover:bg-gray-800  ${
      isActive ? "bg-gray-300 dark:bg-gray-700 font-semibold" : ""
    }`;
  
  const textStyle = "group-hover:text-primary-light dark:group-hover:text-primary-dark";

  function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDarkMode(isDark);
  }

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    setDarkMode(theme === "dark");
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden dark:bg-bg-dark bg-bg-light text-text-light dark:text-text-dark">
      {/* AppBar */}
      <header className="bg-bg1-light fixed w-screen dark:bg-bg1-dark shadow-sm z-20">
        <div className="h-16 flex m-auto self-center items-center justify-between px-4 sm:px-6 max-w-screen-2xl">
          <div className="flex flex-1 items-center gap-3">
            <div className="sm:hidden text-gray-700 dark:text-white">
              <Button
                onClick={() => setSidebarOpen((prev) => !prev)}
                icon={sidebarOpen ? <IconX className="w-5 h-5" /> : <IconMenu2 className="w-5 h-5" />}
              />
            </div>
            <NavLink to={"/"} end className="flex items-center gap-2">
              <div className="flex items-end  gap-3">
                <img
                  src="/app_logo.jpg"
                  alt="Logo"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h1 className=" hidden md:block text-2xl">ዒልም ፈላጊ</h1>
              </div>
            </NavLink>
            <SearchUI/>
            {/* <h1 className="text-xl font-bold text-gray-800 dark:text-white">🌟 MyApp</h1> */}
          </div>
          <div className=" hidden md:block ml-3 mr-3">
            <Button icon={darkMode ? <IconSunFilled/> : <IconMoonStars/>} onClick={toggleTheme}/>
          </div>
        </div>
      </header>

      <div className="w-screen pt-16 flex flex-col overflow-hidden">
        <div className=" flex flex-1 overflow-hidden max-w-screen-2xl m-auto w-full h-full">
          {/* Sidebar (mobile: animated, desktop: static) */}
          <aside
            className={clsx(
              "sm:block sm:w-64 z-30 pt-5 sm:z-auto p-4",
              "sm:relative absolute z-30 h-screen transition-all duration-300 ease-in-out",
              {
                "w-64 bg-card-light dark:bg-card-dark opacity-100 animate-in fade-in slide-in-from-left": sidebarOpen,
                "w-0 opacity-0 pointer-events-none md:pointer-events-auto": !sidebarOpen,
                "sm:w-64 sm:opacity-100": true,
              }
            )}
          >
            <nav className="space-y-2">
              <NavLink to="/" end className={navLinkClass}><IconHome className={`w-4 ${textStyle}`}/><p className={textStyle}>Home</p></NavLink>
              <NavLink to="/fav" className={navLinkClass} ><IconBookmark className={`w-4 ${textStyle}`}/><p className={textStyle}>Fav</p></NavLink>
              <NavLink to="/contents" className={navLinkClass} ><IconListLetters className={`w-4 ${textStyle}`}/><p className={textStyle}>Contents</p></NavLink>
              <NavLink to="/ustazs" className={navLinkClass} ><IconChalkboardTeacher className={`w-4 ${textStyle}`}/><p className={textStyle}>Ustazs</p></NavLink>
              <NavLink to="/started-courses" className={navLinkClass} ><IconBrandParsinta className={`w-4 ${textStyle}`}/><p className={textStyle}>Started Courses</p></NavLink>
              <NavLink to="/settings" className={navLinkClass} ><IconSettings className={`w-4 ${textStyle}`}/><p className={textStyle}>Settings</p></NavLink>
              {/* <hr className="border border-nav-light dark:border-nav-dark"/> */}
              <hr className="my-6 border-t [border-width:0.2px] border-gray-300 dark:border-gray-700" />
              <NavLink to="/about" className={navLinkClass} ><IconInfoCircle className={`w-4 ${textStyle}`}/><p className={textStyle}>About</p></NavLink>
              <NavLink to="/faq" className={navLinkClass} ><IconHelpOctagon className={`w-4 ${textStyle}`}/><p className={textStyle}>FAQ</p></NavLink>
              <NavLink to="https://t.me/MOhamedAljawi" target="_blank" className={navLinkClass} ><IconBrandTelegram className={`w-4 ${textStyle}`}/><p className={textStyle}>Our Platform on Telegram</p></NavLink>
              <NavLink to="/applications" className={navLinkClass} ><IconCategory className={`w-4 ${textStyle}`}/><p className={textStyle}>Applications</p></NavLink>
              <div className="md:hidden ml-3 mr-3">
                <Button icon={darkMode ? <IconSunFilled/> : <IconMoonStars/>} onClick={toggleTheme}/>
              </div>
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 pt-5 overflow-y-auto scrollbar-hide bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark p-5">
            <Outlet />
          </main>
        </div>
        <div className=" w-full bg-bg1-light dark:bg-bg1-dark z-50 ">
          <AudioPlayerUi/>
        </div>
      </div>
    </div>
  );
}
