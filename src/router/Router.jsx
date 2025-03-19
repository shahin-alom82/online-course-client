import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Course from "../pages/Course/Course";
import UserHome from "../pages/Dashboard/User/UserHome";
import DashboardLayout from "../layout/DashboardLayout";
import AdminMenu from "../components/Dashboard/Sidebar/Menu/AdminMenu";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
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
      },

      {
            path: "dashboard",
            element: <DashboardLayout />,
            children: [
                  {
                        path: "userhome",
                        element: <UserHome />
                  },
                  {
                        path: "adminhome",
                        element: <AdminHome />
                  },

            ]
      }
])