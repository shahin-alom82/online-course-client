import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { route } from './router/Router';
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

import {  QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={route}>
          </RouterProvider>
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
    <Toaster />
  </StrictMode>,
)
