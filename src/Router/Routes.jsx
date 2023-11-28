import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import AllContest from "../Pages/AllContest/AllContest";
import DashboardLayout from "../Layout/DashboardLayout";
import ManageUser from "../Pages/ManageUser.jsx/ManageUser";
import ManageContest from "../Pages/ManageContest/ManageContest";
import RegisteredContest from "../Pages/RegisteredContest/RegisteredContest";
import WinningContest from "../Pages/WinningContest/WinningContest";
import MyProfile from "../Pages/MyProfile/MyProfile";
import AddContest from "../Pages/AddContest/AddContest";
import PageError from "../Pages/PageError/PageError";
import CreatedContest from "../Pages/CreatedContest/CreatedContest";
import Update from "../Pages/Update/Update";
import Submition from "../Pages/Submition/Submition";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<PageError/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/course/:id',
                element:<PrivateRoutes><CourseDetails/></PrivateRoutes>
            },
            {
                path:'/allcontest',
                element:<AllContest/>
            },
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element: <Register/>
    },
    {
        path:'dashboard',
        element:<PrivateRoutes><DashboardLayout/>,</PrivateRoutes>,
        children:[
            //Admin all Routes
            {
                path:'manageuser',
                element:<AdminRoutes><ManageUser/></AdminRoutes>
            },
            {
                path:'managecontest',
                element:<AdminRoutes><ManageContest/></AdminRoutes>
            },

            // user all routes
            {
                path:'registeredcontest',
                element:<PrivateRoutes><RegisteredContest/></PrivateRoutes>
            },
            {
                path:'winningcontest',
                element:<PrivateRoutes><WinningContest/></PrivateRoutes>
            },
            {
                path:'myprofile',
                element:<PrivateRoutes><MyProfile/></PrivateRoutes>
            },

            //creator all routes

            {
                path:'addcontest',
                element:<AddContest/>
            },
            {
                path:'createdcontest',
                element:<CreatedContest/>
            },
            {
                path:'createdcontest/update/:id',
                element:<Update/>
            },
            {
                path:'submition/:id',
                element:<Submition/>
            }
        ]
    }
])

export default Routes;