import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AudioProvider } from './features/AudioPlayer/Controller/audioContext.jsx';
import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from 'react-error-boundary';

const queryClient = new QueryClient();

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="p-4 text-red-700 bg-red-100 rounded">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <AudioProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <App />
        </AudioProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>,
)
