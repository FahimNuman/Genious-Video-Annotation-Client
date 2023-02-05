import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Platform from "../Pages/Platform/Platform";
import Service from "../Pages/Service/Service";
import Login from "../Pages/SingUp/Login";
import SingUp from "../Pages/SingUp/SingUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
         path:'/',
         element:<Main/>,
         children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/Login',
                element:<Login/>
            },
            {
                path:'/SingUp',
                element:<SingUp/>
            },
            {
                path:'/Service',
                element:<Service/>
            },
            {
                path:'/Platform',
                element:<Platform/>
            }
         ]
    }
])
export default router;