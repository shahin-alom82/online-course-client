import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Course from "../pages/Course/Course";
import UserHome from "../pages/Dashboard/User/UserHome";
import DashboardLayout from "../layout/DashboardLayout";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import Profile from "../pages/Dashboard/Profile";
import AddCourse from "../pages/Dashboard/Admin/AddCourse";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import AddTeacher from "../pages/Dashboard/Admin/AddTeacher";
import ManageCourse from "../pages/Dashboard/Admin/ManageCourse";
import UpdateCourse from "../pages/Dashboard/Admin/UpdateCourse";
import CourseDetails from "../pages/Course/CourseDetails";
import Contact from "../pages/Contact";



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
                  },
                  {
                        path: "/contact",
                        element: <Contact />
                  },
                  {
                        path: "/coursedetails/:id",
                        element: <CourseDetails />
                  },
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
                  {
                        path: "profile",
                        element: <Profile />
                  },
                  {
                        path: "addcourse",
                        element: <AddCourse />
                  },
                  {
                        path: "allusers",
                        element: <AllUsers />
                  },
                  {
                        path: "addteacher",
                        element: <AddTeacher />
                  },
                  {
                        path: "managecourse",
                        element: <ManageCourse />
                  },
                  {
                        path: "update/:id",
                        element: <UpdateCourse />,
                        loader: ({ params }) => fetch(`http://localhost:5000/course/${params?.id}`)
                  },
            ]
      }
])