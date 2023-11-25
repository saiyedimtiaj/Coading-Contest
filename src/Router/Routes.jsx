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


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/course/:id',
                element:<CourseDetails/>
            },
            {
                path:'/allcontest',
                element:<AllContest/>
            }
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
        element:<DashboardLayout/>,
        children:[
            //Admin all Routes
            {
                path:'manageuser',
                element:<ManageUser/>
            },
            {
                path:'managecontest',
                element:<ManageContest/>
            },

            // user all routes
            {
                path:'registeredcontest',
                element:<RegisteredContest/>
            },
            {
                path:'winningcontest',
                element:<WinningContest/>
            },
            {
                path:'myprofile',
                element:<MyProfile/>
            },

            //creator all routes

            {
                path:'addcontest',
                element:<AddContest/>
            },
            {
                path:'createdcontest'
            }
        ]
    }
])

export default Routes;