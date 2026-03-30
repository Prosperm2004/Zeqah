import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import App from './App.tsx';
import './index.css';

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error("Root element 'root' not found");

  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />
        <Analytics />
      </BrowserRouter>
    </StrictMode>,
  );
} catch (error) {
  console.error("Critical boot error:", error);
}

window.onerror = (message, source, lineno, colno, error) => {
  console.error("Global runtime error:", { message, source, lineno, colno, error });
};
