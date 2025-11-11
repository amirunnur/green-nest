import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";


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
                },
                 {
                    path:'login',
                    element:<Login></Login>
                },
                 {
                    path:'signup',
                    element:<Signup></Signup>
                }
                
            ]

        },
        
         
    ]
)

export default router;