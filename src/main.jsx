import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { route } from './router/Router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}>
    </RouterProvider>
  </StrictMode>,
)
