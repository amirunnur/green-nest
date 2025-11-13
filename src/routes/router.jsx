import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import ErrorPage from "../pages/ErrorPage";
import PlantDetails from "../pages/PlantDetails";


const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <MainLayouts></MainLayouts>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                {  index:true, 
                    element: <Home></Home>,
                    loader: () => fetch('plants.json')
                },
                {
                    path:'/plants',
                    element:<Plants></Plants>,
                     loader: () => fetch('plants.json')
                },
                {
                    path:'/myprofile',
                    element:<MyProfile></MyProfile>
                },
                 {  
                    path:'/login',
                    element:<Login></Login>
                },
                 {
                    path:'/signup',
                    element:<Signup></Signup>
                },
                {
                    path:'/plantDetails/:id',
                    element:<PlantDetails></PlantDetails>,
                      loader: () => fetch('plants.json')
                }
                
            ]

        },
        
         
    ]
)

export default router;