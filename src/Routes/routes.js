import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import CheckOut from "../Components/CheckOut";
import Courses from "../Components/Courses";
import Error from "../Components/Error/Error";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Rightside from "../Components/Rightside/Rightside";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const routes =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/course',
                loader: () => {
                    return fetch('https://beacon-kappa.vercel.app/courses');
                },
                element:<Courses></Courses>,
                children: [
                    {
                        path: '/course/:name',
                        loader: ({params}) => {
                            return fetch(`https://beacon-kappa.vercel.app/courses/${params.name}`)
                        },
                        element: <Rightside></Rightside> 
                    },
                    {
                        path:'/course/name/:id',
                        loader: ({params}) => {
                            return fetch(`https://beacon-kappa.vercel.app/courses/name/${params.id}`)
                        },
                        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>

                    },
                ]
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'/*',
        element:<Error></Error>
    }
])