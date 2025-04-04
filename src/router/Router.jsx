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
import ManageTeacher from "../pages/Dashboard/Admin/ManageTeacher";
import UpdateTeacher from "../pages/Dashboard/Admin/UpdateTeacher";
import InstructorsDetails from "../components/Instructors/InstructorsDetails";
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory";
import CourseAccess from "../pages/Dashboard/User/CourseAccess";

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
                        path: "/teacherdetails/:id",
                        element: <InstructorsDetails />,
                        loader: ({ params }) => fetch(`http://localhost:5000/teacher/${params.id}`)
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

                  // Admin Data
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
                        path: "manageteacher",
                        element: <ManageTeacher />
                  },
                  {
                        path: "managecourse",
                        element: <ManageCourse />
                  },
                  {
                        path: "teacher/:id",
                        element: <UpdateTeacher />,
                        loader: ({ params }) => fetch(`http://localhost:5000/teacher/${params?.id}`)
                  },
                  {
                        path: "update/:id",
                        element: <UpdateCourse />,
                        loader: ({ params }) => fetch(`http://localhost:5000/course/${params?.id}`)
                  },

                  // User Data
                  {
                        path: "userhome",
                        element: <UserHome />
                  },
                  {
                        path: "paymentshistory",
                        element: <PaymentHistory />
                  },
                  {
                        path: "courseaccess",
                        element: <CourseAccess />
                  },

            ]
      }
])