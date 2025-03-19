import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Course from "../pages/Course/Course";
export const route = createBrowserRouter([
      {
            path: "/",
            element: <MainLayout />,
            children: [
                  {
                        path: "/",
                        element: <Home />
                  },
                  {
                        path: "/login",
                        element: <Login />
                  },
                  {
                        path: "/register",
                        element: <Register />
                  },
                  {
                        path: "/course",
                        element: <Course />
                  }
            ]
      }
])