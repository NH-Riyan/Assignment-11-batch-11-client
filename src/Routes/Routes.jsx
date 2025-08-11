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
            path:"/addcourse",
            element:<AddCourse></AddCourse>     
        },
        {
            path:"/courses",
            element:<Allcourses></Allcourses>
        },
        {
          path:"/mycourses",
          element:<MyCourse></MyCourse>
        },
        {
          path:"/editcourses/:id",
          loader:({params})=>fetch(`http://localhost:3000/courses/${params.id}`),
          element:<UpdateCourse></UpdateCourse>
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
          path:"/auth/register",
          element: <Register></Register>
        }
      ]
    }
  ]);