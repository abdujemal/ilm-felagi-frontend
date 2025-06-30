import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HomeTabProvider } from './features/Main/Controller/homeController.jsx'
import { CourseDetailProvider } from './features/Course Detail/Controller/courseDetailController.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CourseDetailProvider>
      <HomeTabProvider>
        <App />
      </HomeTabProvider>
    </CourseDetailProvider>
  </StrictMode>,
)
