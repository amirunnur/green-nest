import { createBrowserRouter } from "react-router";

import MainLayouts from "../layouts/MainLayouts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";


const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <MainLayouts></MainLayouts>,
            children:[
                {
                    path:'home',
                    element: <Home></Home>,
                },
                {
                    path:'plants',
                    element:<Plants></Plants>,
                },
                {
                    path:'myprofile',
                    element:<MyProfile></MyProfile>
                }
                
            ]

        },
         
    ]
)

export default router;