import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AudioProvider } from './features/AudioPlayer/Controller/audioContext.jsx';
import { Toaster } from 'react-hot-toast';


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AudioProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <App />
      </AudioProvider>
    </QueryClientProvider>
  </StrictMode>,
)
