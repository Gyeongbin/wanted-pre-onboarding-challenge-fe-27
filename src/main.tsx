import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Router } from './app/router.tsx';
import GlobalStyle from './app/style/globalStyle.ts';

const RouterObject = createBrowserRouter(Router);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={RouterObject} />
    <GlobalStyle />
  </StrictMode>,
);
