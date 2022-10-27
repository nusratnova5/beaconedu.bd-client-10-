import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Courses from "../Components/Courses";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Rightside from "../Components/Rightside/Rightside";
import Main from "../Layout/Main";

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
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])