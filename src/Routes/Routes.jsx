import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AddCourse from "../Components/AddCourse/AddCourse";
import Allcourses from "../Components/AllCourses/Allcourses";
import MyCourse from "../Components/MyCourse/MyCourse";
import UpdateCourse from "../Components/UpdateCourse/UpdateCourse";
import Details from "../Components/Details/Details";
import EnrolledCourses from "../Components/EnrolledCourses/EnrolledCourses";
import Errorpage from "../Components/Errorpage/Errorpage";
import PrivateRoutes from "../Components/PrivateRoutes/PrivateRoutes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addcourse",
        element: <PrivateRoutes><AddCourse></AddCourse></PrivateRoutes>
      },
      {
        path: "/courses",
        element: <Allcourses></Allcourses>
      },
      {
        path: "/mycourses",
        element: <PrivateRoutes><MyCourse></MyCourse></PrivateRoutes>
      },
      {
        path: "/editcourses/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/courses/${params.id}`),
        element: <PrivateRoutes><UpdateCourse></UpdateCourse></PrivateRoutes>
      },
      {
        path: "/details/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/courses/${params.id}`),
        element: <Details></Details>
      },
      {
        path: "/enrolledcourses",
        element: <PrivateRoutes><EnrolledCourses></EnrolledCourses></PrivateRoutes>
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "*",
    Component: Errorpage,
  },
]);