import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import CheckOut from "../Components/CheckOut";
import Courses from "../Components/Courses";
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
                    return fetch('http://localhost:5000/courses');
                },
                element:<Courses></Courses>,
                children: [
                    {
                        path: '/course/:name',
                        loader: ({params}) => {
                            return fetch(`http://localhost:5000/courses/${params.name}`)
                        },
                        element: <Rightside></Rightside> 
                    }
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
                path:'/checkout',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])