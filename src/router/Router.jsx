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
import Blog from "../pages/Blog/Blog";
import IntermediateLevelCourse from "../pages/Blog/IntermediateLevelCourse";
import BeginnerLevelCourse from "../pages/Blog/BeginnerLevelCourse";
import AdvancedLevelCourse from "../pages/Blog/AdvancedLevelCourse";

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
                        path: "/blog",
                        element: <Blog />
                  },

                  {
                        path: "/intermediate",
                        element: <IntermediateLevelCourse />
                  },
                  {
                        path: "/beginner",
                        element: <BeginnerLevelCourse />
                  },
                  {
                        path: "/advanced",
                        element: <AdvancedLevelCourse />
                  },

                  {
                        path: "/coursedetails/:id",
                        element: <CourseDetails />,
                        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
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