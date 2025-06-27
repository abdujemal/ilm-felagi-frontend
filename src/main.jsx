import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HomeTabProvider } from './features/Main/Controller/homeController.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeTabProvider>
      <App />
    </HomeTabProvider>
  </StrictMode>,
)
