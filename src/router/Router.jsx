import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import React from "react";
export const route = createBrowserRouter([
      {
            path: "/",
            element: <MainLayout />,
            children: [
                  {
                        path: "/",
                        element: <Home />
                  }
            ]
      }
])