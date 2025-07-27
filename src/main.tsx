import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { AppProvider } from './store/app-provider.tsx';
import "@sergio.mallma/fe-clinic-components/styles.css";
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </StrictMode>
);
